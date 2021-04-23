'use strict';

const ajvSchemaValidator = require('./food.schema-validator');
const errorBuilder = require('../commons/error-builder');

async function schemaValidatorSavePut(req, res, next) {
  let validator = ajvSchemaValidator.validatorSavePut(req.body);
  if (!validator.bool) {
    const error = errorBuilder.build('ajv', validator.error);
    return res.status(error.status).json(error.body);
  }
  next();
}

module.exports = {
  schemaValidatorSavePut
};
