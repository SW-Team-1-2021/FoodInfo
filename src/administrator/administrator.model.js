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

function findByName(data) {
  return administratorDB.find({ nombre: data });
}

function findByNameAndOptional(data) {
  return administratorDB.find({$or:[{ nombre: {'$regex': data,$options:'i'}}, {segundonombre: {'$regex': data,$options:'i'}}]});
}

function findByCategory(data) {
  return administratorDB.find({ categoria: {'$regex': data,$options:'i'} });
}
module.exports = {
  save,
  getdata,
  findByName,
  getDataById,
  findByNameAndOptional,
  findByCategory
};
