'use strict';

const foodDB = require('./food.db');

function save(data) {
  return foodDB.save(data);
}

function getdata() {
  return foodDB.getdata();
}

function findByName(data) {
  return foodDB.find({ nombre: data });
}
module.exports = {
  save,
  getdata,
  findByName
};
