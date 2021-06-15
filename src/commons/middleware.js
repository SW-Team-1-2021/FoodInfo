'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorBuilder = require('../commons/error-builder');
const { findByToken } = require('../login/login.model');
const { SALT_ROUNDS } = require('../config/global');

const METHOD = ['PUT', 'POST'];
const PASSWORD = 'password';
const IGNORE = [PASSWORD, 'username', 'email', 'externalId', 'imagen', 'descripcion', 'token'];
const NO_TOKEN = 'no token';
const INVALID_TOKEN = 'invalid token';

function findValue(array, string) {
  return array.find(value => value === string);
}
function upercase(res, request, next) {
  if (findValue(METHOD, request.req.method)) {
    for (const prop in request.req.body) {
      if (!findValue(IGNORE, prop)) {
        request.req.body[prop] = typeof request.req.body[prop] === 'string' ?
          request.req.body[prop].toUpperCase() : request.req.body[prop];
      }
    }
  }
  next();
}

function trimQuery(res, request, next) {
  for (const prop in request.req.query) {
    request.req.query[prop] =
    request.req.query[prop].trim();
  }
  next();
}

function encrypt(res, request, next) {
  if (findValue(METHOD, request.req.method)) {
    for (const prop in request.req.body) {
      if (prop === PASSWORD) {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        const hash = bcrypt.hashSync(request.req.body[prop], salt);
        request.req.body[prop] = hash;
      }
    }
  }
  next();
}

async function decoded(res, request, next) {
  try {
    const token = request.req.query.token;
    if (token) {
      const found = await findByToken(token);
      jwt.verify(token, '_swteam_');
      if (found.length !== 1) {
        throw errorBuilder.build(
          INVALID_TOKEN,
          {
            name: 'unauthorized',
            message: `Invalid token - The token not found in the system.`
          });
      }
    } else {
      throw errorBuilder.build(
        NO_TOKEN,
        {
          name: 'unauthorized',
          message: `No token - You need send a valid token`
        });
    }
    next();
  } catch (error) {
    if (error.status) {
      return res.res.status(error.status).json(error.body);
    } else {
      const newError = errorBuilder.build(
        INVALID_TOKEN,
        {
          name: 'unauthorized',
          message: `TokenExpiredError - The jwt expired.`
        });
      return res.res.status(newError.status).json(newError.body);
    }
  }
}

module.exports = {
  upercase,
  encrypt,
  trimQuery,
  decoded
};
