'use strict';

const validator = (req, res, next) => {
  if (!req.query.name) {
    throw new Error('Name is required');

  } else {
    next();
  }
};

module.exports = validator;


// this is testing if the name is valid
// if(req.query.name) {
//   next();
// } else {
//   next('Query name is required');
// }
