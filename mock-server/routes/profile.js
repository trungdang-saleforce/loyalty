'use strict'

const express = require('express');
const router = express.Router();
const PATH_DATA = require('../commons/PATH_DATA');
const jsonHandler = require('../handler/jsonHandler');
const {accessToken} = require('../handler/accessHandler');
const _ = require('lodash');

router.get('/', accessToken, (req, res, next) => {
  jsonHandler.read(PATH_DATA.PROFILE, (data) => {
    //read file successfully!
    const DATAS = JSON.parse(data);
    const profile = _.filter(_.get(DATAS, 'data', []), (item, i) => {
      return item.userId === req.userId
    })
    if(_.isEmpty(profile) || profile.length > 1) {
      res.status(200).json({error: -1, message: 'Not found user!'});
    } else {
      const result = profile[0];
      delete result.password;
      delete result.token;
      delete result.userId;
      res.status(200).json({error: 0, data: result})
    }
  })
});

module.exports = router;

