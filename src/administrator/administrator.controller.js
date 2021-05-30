'use strict';

const model = require('./administrator.model');
const errorBuilder = require('../commons/error-builder');


async function saveAdministrator(req, res) {
  try {
    const admin = await model.save(req.body);
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  saveAdministrator
};
