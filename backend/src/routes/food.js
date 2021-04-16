'use strict';

const express = require('express');
const foodController = require('../food/food.controller');

const router = express.Router();
router
  .post('/', foodController.saveFood);

module.exports = router;
