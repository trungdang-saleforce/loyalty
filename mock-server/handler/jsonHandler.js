const fs = require('fs')
const DATA = require('../commons/RESPONSE')

const jsonHandler = {

  read: (fileName, next) => {
    fs.readFile(fileName, (err, data) => {  
      if (err) {
        next({error: err});
      }
      next(data);
    });
  },

  write: (fileName, obj) => {
    fs.writeFileSync(fileName, JSON.stringify(obj), err => {
      if (err) throw err
    })
  }

}

module.exports = jsonHandler;