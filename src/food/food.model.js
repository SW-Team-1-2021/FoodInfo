'use strict';

const foodDB = require('./food.db');

function save(data) {
  return foodDB.save(data);
}

function getdata() {
  return foodDB.getdata();
}

function getDataById(id) {
  return foodDB.getDataById(id);
}

function findByName(data) {
  return foodDB.find({ nombre: data });
}

function findByNameAndOptional(data) {
  return foodDB.find({$or:[{ nombre: {'$regex': data,$options:'i'}}, {segundonombre: {'$regex': data,$options:'i'}}]});
}

function findByCategory(data) {
  return foodDB.find({ categoria: {'$regex': data,$options:'i'} });
}
module.exports = {
  save,
  getdata,
  findByName,
  getDataById,
  findByNameAndOptional,
  findByCategory
};
