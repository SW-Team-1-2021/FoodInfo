'use strict';

const Ajv = require('ajv');
const ajv = new Ajv();

let ajvSchemaValidator = (jsonSchema, ajvSchema) => {
  let res = {
    bool: true,
    error: []
  };
  const validate = ajv.compile(ajvSchema);
  res.bool = validate(jsonSchema);
  if (!res.bool)
    res.error = validate.errors;
  return res;
};

module.exports = {
  ajvSchemaValidator
};
