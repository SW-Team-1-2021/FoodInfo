'use strict';

const ajvValidator = require('../commons/ajv-validator');

const properties = {
  name: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 50
  },
  lastname: {
    'type': 'string',
    'minlength': 2,
    'maxlength': 50
  },
  ci: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 10
  },
  email: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 250
  },
  datebirth: {
    'type': 'string',
    'minlength': 1
  },
  gender: {
    'type': 'string',
    'minlength': 1
  }
};

const requiredSavePut = [
  'name',
  'lastname',
  'ci',
  'email',
  'datebirth',
  'gender'
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
