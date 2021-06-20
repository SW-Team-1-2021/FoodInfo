'use strict';

const mongoose = require('mongoose');
const schema = require('./login.schema');
const errorBuilder = require('../commons/error-builder');

const DOCUMENT = 'token';
const MONGOOSE = 'mongoose';

let token = mongoose.model(DOCUMENT, schema.tokenSchema);

async function save(data) {
  try {
    return await token.create(data);
  } catch (error) {
    console.log(MONGOOSE);
    throw error;
  }
}

async function getdata() {
  try {
    return await token.find();
  } catch (error) {
    console.log(MONGOOSE);
    throw error;
  }
}

async function getDataById(id) {
  try {
    const res = await token.findById(id);
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
    return await token.find(data);
  } catch (error) {
    throw errorBuilder.build(MONGOOSE, error);
  }
}

async function removeById(id) {
  try {
    return await token.findOneAndRemove({ _id: id});
  } catch (error) {
    throw errorBuilder.build(MONGOOSE, error);
  }
}

module.exports = {
  save,
  getdata,
  find,
  getDataById,
  removeById
};
