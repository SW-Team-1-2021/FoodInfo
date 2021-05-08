'use strict';

const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = '../config/global';

const METHOD = ['PUT', 'POST'];
const PASSWORD = 'password';
const IGNORE = [PASSWORD, 'username', 'email', 'externalId', 'imagen', 'descripcion'];

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
    request.req.query[prop] = request.req.query[prop].trim();
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

module.exports = {
  upercase,
  encrypt,
  trimQuery
};
