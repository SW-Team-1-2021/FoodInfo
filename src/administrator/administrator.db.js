'use strict';

const mongoose = require('mongoose');
const schema = require('./administrator.schema');
const errorBuilder = require('../commons/error-builder');

const DOCUMENT = 'administrator';
const MONGOOSE = 'mongoose';

let administrator = mongoose.model(DOCUMENT, schema.administratorSchema);

async function save(data) {
  try {
    return await administrator.create(data);
  } catch (error) {
    console.log(MONGOOSE);
    throw error;
  }
}

async function getdata() {
  try {
    return await administrator.find();
  } catch (error) {
    console.log(MONGOOSE);
    throw error;
  }
}

async function getDataById(id) {
  try {
    const res = await administrator.findById(id);
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
    return await administrator.find(data);
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
