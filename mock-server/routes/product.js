'use strict'

const express = require('express');
const router = express.Router();
const jsonHandler = require('../handler/jsonHandler');
const PATH_DATA = require('../commons/PATH_DATA');
const {accessToken} = require('../handler/accessHandler');
const _ = require('lodash');

router.get('/', accessToken, (req, res, next) => {
  let productName = req.query.name;
  jsonHandler.read(PATH_DATA.PRODUCT, (data) => {
    let products = JSON.parse(data)['data'];
    let result = _.filter(products, (item, k) => {
      return _.includes(item.title, productName)
    })
    res.status(200).json({error: 0, data: result});
  })
});

module.exports = router;

