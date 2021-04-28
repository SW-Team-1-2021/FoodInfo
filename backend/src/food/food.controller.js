'use strict';

// const fs = require('fs');
const model = require('./food.model');
const errorBuilder = require('../commons/error-builder');

const CONFLICT = 'conflict';

async function saveFood(req, res) {
  try {
    let foodSave = req.body;
    // foodSave.imagen = {
    //   data: fs.readFileSync(req.file.path),
    //   contentType: 'image/jpg'
    // };

    const result = await model.findByName(foodSave.nombre);
    if (result.length > 0) {
      throw errorBuilder.build(
        CONFLICT,
        {
          name: 'Data Repetition',
          message: `The ${foodSave.nombre} is already saved in the DB`
        });
    }
    const food = await model.save(foodSave);
    return res.status(200).json(food);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function getFood(req, res) {
  try {
    const food = await model.getdata();
    return res.status(200).json(food);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  saveFood,
  getFood
};
