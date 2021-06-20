'use strict';

const express = require('express');
const logoutController = require('../logout/logout.controller');
const middleware = require('../logout/logout.middleware');

const router = express.Router();

router
  .post('/',
    middleware.schemaValidatorSavePut,
    logoutController.removeToken);

module.exports = router;
