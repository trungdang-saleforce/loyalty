const SUCCESS = {
  error: 0,
  message: 'Successful'
};

const FAILED = {
  error: -1,
  message: 'Failed'
}

const FORBIDDEN = {
  error: -403,
  message: 'Access forbidden'
}

module.exports = {
  SUCCESS, FAILED, FORBIDDEN
}