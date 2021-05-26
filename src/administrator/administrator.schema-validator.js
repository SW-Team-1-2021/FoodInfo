'use strict';

const ajvValidator = require('../commons/ajv-validator');

const properties = {
  categoria: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 80
  },
  nombre: {
    'type': 'string',
    'minlength': 2,
    'maxlength': 80
  },
  segundonombre: {
    'type': 'string'
  },
  procedencia: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 80
  },
  calorias: {
    'type': 'string',
    'minimum': 1
  },
  horainicio: {
    'type': 'string'
  },
  horafinal: {
    'type': 'string'
  },
  advertencia: {
    'type': 'string',
    'maxlength': 150
  },
  combinacion: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 100
  },
  descripcion: {
    'type': 'string',
    'minlength': 1,
    'maxlength': 250
  }
};

const requiredSavePut = [
  'categoria',
  'nombre',
  'segundonombre',
  'procedencia',
  'calorias',
  'horainicio',
  'horafinal',
  'advertencia',
  'combinacion',
  'descripcion',
  'imagen'
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
