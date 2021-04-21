'use strict';

const model = require('./food.model');

async function saveFood(req, res) {
  try {
    const food = await model.save(req.body);
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
