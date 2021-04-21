'use strict';

const mongoose = require('mongoose');
const schema = require('./food.schema');

const DOCUMENT = 'food';
const MONGOOSE = 'mongoose';

let food = mongoose.model(DOCUMENT, schema.foodSchema);

async function save(data) {
  try {
    return await food.create(data);
  } catch (error) {
    console.log(MONGOOSE);
    throw error;
  }
}

async function getdata() {
  try {
    return await food.find();
  } catch (error) {
    console.log(MONGOOSE);
    throw error;
  }
}

module.exports = {
  save,
  getdata
};
