'use strict';

const model = require('../login/login.model');
const errorBuilder = require('../commons/error-builder');

const UNAUTHORIZED = 'unauthorized';


async function removeToken(req, res) {
  try {
    const token = await model.findByToken(req.body.token);
    if (token.length === 1) {
      await model.removeById(token[0]._id);
      return res.status(200).json(true);
    }
    throw errorBuilder.build(
      UNAUTHORIZED,
      {
        name: 'Unauthorized',
        message: `The token ${req.body.token} was wrong`
      });
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  removeToken
};
