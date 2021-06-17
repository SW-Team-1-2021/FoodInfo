'use strict';

const administratorDB = require('./login.db');

function save(data) {
  return administratorDB.save(data);
}

function findByToken(data) {
  return administratorDB.find({ token: data });
}

module.exports = {
  save,
  findByToken
};
