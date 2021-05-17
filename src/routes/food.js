'use strict';

const express = require('express');
const foodController = require('../food/food.controller');
const middleware = require('../food/food.middleware');

const router = express.Router();

router
  .post('/', middleware.schemaValidatorSavePut, foodController.saveFood)
  .get('/', foodController.getFood)
  .get('/:id', foodController.getFoodById);

module.exports = router;
