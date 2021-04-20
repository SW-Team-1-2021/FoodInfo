import foodschemadefi from './food.schema.defi.json';
import ajv, { ErrorObject } from 'ajv';
import { model } from 'mongoose';

const ajValidator = ajv({ allErrors: true }),
const validate = ajValidator.compile(foodschemadefi);
const result = await validate(model);
if (!result) {
  const errors = await this.parseErrors(validate.errors);
  throw errors;
}