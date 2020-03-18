const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const ROUTER = require('./commons/ROUTER');

//Cross domain origins
app.use(cors());

//morgan
app.use(morgan('dev'));

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server app listening at http://%s:%s", host, port)

});

//Routes
app.use(ROUTER.APP_DATA.path, require(ROUTER.APP_DATA.route));
app.use(ROUTER.CATEGORY.path, require(ROUTER.CATEGORY.route));
app.use(ROUTER.PRODUCT.path, require(ROUTER.PRODUCT.route));
app.use(ROUTER.SPECIAL_OFFER.path, require(ROUTER.SPECIAL_OFFER.route));
app.use(ROUTER.PROFILE.path, require(ROUTER.PROFILE.route));
app.use(ROUTER.LOGIN.path, require(ROUTER.LOGIN.route));
