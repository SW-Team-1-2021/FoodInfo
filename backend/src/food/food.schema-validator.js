'use strict';

const ajvValidator = require('../commons/ajv-validator');

const properties = {
  categoria: {
    'type': 'string',
    'minimum': 1,
    'maximum': 80
  },
  nombre: {
    'type': 'string',
    'minimum': 2,
    'maximum': 80
  },
  segundonombre: {
    'type': 'string'
  },
  procedencia: {
    'type': 'string',
    'minimum': 1,
    'maximum': 80
  },
  categorias: {
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
    'maximum': 150
  },
  combinacion: {
    'type': 'string',
    'minimum': 1,
    'maximum': 100
  },
  descripcion: {
    'type': 'string',
    'minimum': 1,
    'maximum': 250
  },
  imagen: {
    'type': 'string'
  }
};

const requiredSavePut = [
  'categoria',
  'nombre',
  'segundonombre',
  'procedencia',
  'categorias',
  'horainicio',
  'horafinal',
  'advertencia',
  'combinacion',
  'descripcion',
  'imagen'
];

const schemaSavePut = {
  'additionalProperties': false,
  properties,
  required: requiredSavePut
};

let validatorSavePut = jsonSchema => ajvValidator.ajvSchemaValidator(jsonSchema, schemaSavePut);

module.exports = {
  validatorSavePut
};
