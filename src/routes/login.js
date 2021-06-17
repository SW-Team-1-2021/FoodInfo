'use strict';

const express = require('express');
const loginController = require('../login/login.controller');
const middleware = require('../login/login.middleware');

const router = express.Router();

router
  .post('/',
    middleware.schemaValidatorSavePut,
    loginController.createToken);

module.exports = router;
