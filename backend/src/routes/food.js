'use strict';

const express = require('express');
const foodController = require('../food/food.controller');
const middleware = require('../person/person.middleware');

const router = express.Router();

router
  .post('/',
    middleware.schemaValidatorSavePut, foodController.saveFood)
  .get('/', (req, res) => {
    res.send('<h1>tabla de alimentos</h1>');
  });
module.exports = router;
