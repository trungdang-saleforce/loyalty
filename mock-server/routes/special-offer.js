'use strict'

const express = require('express');
const router = express.Router();
const jsonHandler = require('../handler/jsonHandler');
const PATH_DATA = require('../commons/PATH_DATA');
const {accessToken} = require('../handler/accessHandler');

router.get('/', accessToken, (req, res, next) => {
  jsonHandler.read(PATH_DATA.SPECIAL_OFFER, (data) => {
    res.status(200).json({error: 0, data: JSON.parse(data)['data']});
  })
});

module.exports = router;

