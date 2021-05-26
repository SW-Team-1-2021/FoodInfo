'use strict';

const model = require('./administrator.model');
const errorBuilder = require('../commons/error-builder');


async function saveAdministrator(req, res) {
  try {
    
    return res.status(200).json({});
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  saveAdministrator
};
