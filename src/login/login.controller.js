'use strict';

// const fs = require('fs');
var jwt = require('jsonwebtoken');
// const model = require('./food.model');
// const errorBuilder = require('../commons/error-builder');

const CONFLICT = 'conflict';


async function createToken(req, res) {
  try {
    let token = jwt.sign({ zoo: 'barito' }, 'shhhhh');
    return res.status(200).json(token);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  createToken
};
