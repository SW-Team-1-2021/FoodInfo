'use strict';

const model = require('./food.model');
const errorBuilder = require('../commons/error-builder');

const CONFLICT = 'conflict';
const CATEGORY = 'category';
const NAME = 'name';

async function saveFood(req, res) {
  try {
    let foodSave = req.body;

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
    const QUERY = [];
    for (const key in req.query)
      QUERY.push(key);

    let food;
    switch (QUERY[0]) {
      case CATEGORY : food = await model.findByCategory(req.query[CATEGORY]);
        break;
      case NAME : food = await model.findByNameAndOptional(req.query[NAME]);
        break;
      default : food = await model.getdata();
        break;
    }

    return res.status(200).json(food);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function getFoodById(req, res) {
  try {
    const food = await model.getDataById(req.params.id);
    return res.status(200).json(food);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  saveFood,
  getFood,
  getFoodById
};
