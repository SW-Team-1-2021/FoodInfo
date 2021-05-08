'use strict';

const mongoose = require('mongoose');
const schema = require('./food.schema');
const errorBuilder = require('../commons/error-builder');

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

async function getDataById(id) {
  try {
    const res = await food.findById(id);
    if (res)
      return res;
    throw errorBuilder.build('configure-status', {name: 'database - findById', message: 'not found speciality id', status: 404});
  } catch (error) {
    if (error.status === 404)
      throw error;
    throw errorBuilder.build(MONGOOSE, error);
  }
}

async function find(data) {
  try {
    return await food.find(data);
  } catch (error) {
    throw errorBuilder.build(MONGOOSE, error);
  }
}

module.exports = {
  save,
  getdata,
  find,
  getDataById
};
