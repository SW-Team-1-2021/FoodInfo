'use strict';

const ajvValidator = require('../commons/ajv-validator');

const properties = {
  username: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 80
  },
  password: {
    'type': 'string',
    'minlength': 2,
    'maxlength': 20
  }
};

const requiredSavePut = [
  'username',
  'password'
];

const schemaSavePut = {
  'additionalProperties': true,
  properties,
  required: requiredSavePut
};

let validatorSavePut = jsonSchema => ajvValidator.ajvSchemaValidator(jsonSchema, schemaSavePut);

module.exports = {
  validatorSavePut
};
