'use strict';

const administratorDB = require('./administrator.db');

function save(data) {
  return administratorDB.save(data);
}

function getdata() {
  return administratorDB.getdata();
}

function getDataById(id) {
  return administratorDB.getDataById(id);
}

function findByEmailAndCi(data) {
  return administratorDB.find({ email: data.email, ci: data.ci });
}

function findByEmail(data) {
  return administratorDB.find({ email: data.email});
}

function findByCi(data) {
  return administratorDB.find({ ci: data.ci});
}

module.exports = {
  save,
  getdata,
  getDataById,
  findByEmailAndCi,
  findByEmail,
  findByCi
};
