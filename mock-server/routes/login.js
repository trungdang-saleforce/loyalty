'use strict'

const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const moment = require('moment');
const PATH_DATA = require('../commons/PATH_DATA');
const jsonHandler = require('../handler/jsonHandler');
const {generateToken} = require('../handler/accessHandler');
const _ = require('lodash');

const REGISTER_DATE_FORMAT = 'ddd, MMM DD YYYY HH:mm:ss A'

const INIT_ACCOUNT = (email, password) => {
  const userId = uuidv1()
  let token = generateToken(userId)
  return {
    "token": token,
    "password": bcrypt.hashSync(password, 10),
    "userId": userId,
    "name": "",
    "address": "",
    "phone": "",
    "email": email,
    "language": "",
    "interestedFields": [],
    "avatarImage": "http://triqtran.github.io/images/loyalty/others/profile.png",
    "registerDate": moment().format(REGISTER_DATE_FORMAT),
    "currentBalancePoints": 0,
    "rewardPoints": 0,
    "vouchers": 0,
    "offers": 0,
    "qrcodeImage": "http://triqtran.github.io/images/loyalty/others/qr-code.png" 
  }
}

router.post('/', (req, res, next) => {
  const user = {
    email: req.body.username,
    password: req.body.password
  }
  jsonHandler.read(PATH_DATA.PROFILE, (data) => {
    try {
      let DATAS = JSON.parse(data);
      let profiles = DATAS['data'].filter((profile, index) => {
        return profile.email === user.email
      });
      //sigup account
      if(_.isEmpty(profiles)) {
        let newUser = INIT_ACCOUNT(user.email, user.password);
        DATAS['data'].push(newUser)
        jsonHandler.write(PATH_DATA.PROFILE, DATAS);
        res.status(200).json({error: 1, data: newUser.token})
      } else {
        //login existed account
        let existedUser = profiles[0]
        let correctPassowrd = bcrypt.compareSync(user.password, existedUser.password)
        if(correctPassowrd) {
          existedUser.token = generateToken(existedUser.userId)
          let updateDATA = DATAS['data'].map((p, i) => {
            if(p.userId === existedUser.userId) {
              return existedUser
            }
            return p
          });
          DATAS['data'] = updateDATA
          jsonHandler.write(PATH_DATA.PROFILE, DATAS)
          res.status(200).json({error: 0, data: {token: existedUser.token}})
        } else {
          res.status(200).json({error: -1, message: 'Log in failed'})
        }
      }
    } catch(err) {

    }
  })
});

module.exports = router;

