'use strict'

const express = require('express');
const router = express.Router();
const jsonHandler = require('../handler/jsonHandler');
// const {accessToken} = require('../handler/accessHandler');

router.get('/', (req, res, next) => { /* accessToken */
  jsonHandler.read('./data/appData.json', (data) => {
    try{
      res.status(200).json({error: 0, data: JSON.parse(data)});
    } catch(e) {
      res.status(200).json({error: -1, message: e});
    }
  })
});

module.exports = router;

