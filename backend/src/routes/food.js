'use strict';

const express = require('express');
const foodController = require('../food/food.controller');

const router = express.Router();

router
    .post('/', foodController.saveFood)
    .get('/alimentos', (req, res) => {
        res.send('<h1>tabla de alimentos</h1>');
    });

module.exports = router;
