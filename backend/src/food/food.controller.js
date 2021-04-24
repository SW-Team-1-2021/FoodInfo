'use strict';

const fs = require('fs');
const model = require('./food.model');

async function saveFood(req, res) {
  try {
    let foodSave = req.body;
    foodSave.imagen = {
      data: fs.readFileSync(req.file.path),
      contentType: 'image/jpg'
    };

    const food = await model.save(foodSave);
    return res.status(200).json(food);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  saveFood
};
