'use strict';

const express = require('express');
const loginController = require('../login/login.controller');
const middleware = require('../food/food.middleware');

const router = express.Router();

router
  .post('/',
    //middleware.schemaValidatorSavePut,
    loginController.createToken);

module.exports = router;
