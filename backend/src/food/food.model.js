'use strict';

const foodDB = require('./food.db');

function save(data) {
  return foodDB.save(data);
}

function getdata() {
  return foodDB.getdata();
}
module.exports = {
  save,
  getdata
};
