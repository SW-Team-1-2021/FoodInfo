'use strict';

const express = require('express');
const administratorController = require('../administrator/administrator.controller');
const middleware = require('../administrator/administrator.middleware');

const router = express.Router();

router
  .post('/',
    middleware.schemaValidatorSavePut,
    administratorController.saveAdministrator);

module.exports = router;
