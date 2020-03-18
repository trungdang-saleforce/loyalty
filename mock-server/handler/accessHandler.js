const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../commons/JWT');
const RESPONSE = require('../commons/RESPONSE');
const _ = require('lodash')

exports.accessToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization
  console.log('Token:', bearerHeader)
  if(typeof bearerHeader === 'undefined') {
    res.status(200).json(RESPONSE.FORBIDDEN);
  }
  const token = _.split(bearerHeader, ' ')[1];
  jwt.verify(token, SECRET_KEY, { expiresIn: '30d' }, (err, data) => {
    if(err) {
      res.status(200).json(RESPONSE.FORBIDDEN);
    } else {
      req.userId = data.userId;
      console.log('UserID:', req.userId, ' - token:', data)
      next();
    }
  })
}

//payload: {userId: 1}
exports.generateToken = (id) => {
  const token = jwt.sign({
    userId: id
  },
    SECRET_KEY, { expiresIn: '30d' }
  );
  return token;
}