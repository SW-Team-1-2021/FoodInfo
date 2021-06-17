'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let administratorSchema = new Schema({
  email: String,
  ci: String
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = {
  administratorSchema
};
