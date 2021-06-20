'use strict';

const ajvValidator = require('../commons/ajv-validator');

const properties = {
  token: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 250
  }
};

const requiredSavePut = [
  'token'
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
