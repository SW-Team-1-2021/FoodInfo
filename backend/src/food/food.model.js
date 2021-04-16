'use strict';

const foodDB = require('./food.db');

function save(data) {
  return foodDB.save(data);
}

module.exports = {
  save
};
