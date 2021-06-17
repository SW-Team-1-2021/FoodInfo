'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let administratorSchema = new Schema({
  name: String,
  lastname: String,
  ci: String,
  email: String,
  datebirth: String,
  gender: String
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = {
  administratorSchema
};
