'use strict';

const jwt = require('jsonwebtoken');
const modelAdministrator = require('../administrator/administrator.model');
const model = require('../login/login.model');
const { KEY, TEAM } = require('../config/global');
const errorBuilder = require('../commons/error-builder');

const UNAUTHORIZED = 'unauthorized';


async function createToken(req, res) {
  try {
    const admin = await modelAdministrator.findByEmailAndCi({ email: req.body.username, ci: req.body.password });
    if (admin.length === 1) {
      let token = jwt.sign(
        { team: TEAM },
        KEY,
        { expiresIn: 60 * 15 });
      await model.save({ token });
      return res.status(200).json(token);
    }
    throw errorBuilder.build(
      UNAUTHORIZED,
      {
        name: 'Unauthorized',
        message: `The ${req.body.username} or ${req.body.password} was wrong`
      });
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  createToken
};
