'use strict';

const loginDB = require('./login.db');

function save(data) {
  return loginDB.save(data);
}

function findByToken(data) {
  return loginDB.find({ token: data });
}
function removeById(id) {
  return loginDB.removeById(id);
}

module.exports = {
  save,
  findByToken,
  removeById
};
