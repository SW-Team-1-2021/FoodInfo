'use strict';

const model = require('./administrator.model');
const errorBuilder = require('../commons/error-builder');


async function saveAdministrator(req, res) {
  try {
    let adminSave = req.body;
    const result = await model.findByName(foodSave.nombre);
    
    if (result.length > 0) {
      throw errorBuilder.build(
        CONFLICT,
        {
          name: 'Data Repetition',
          message: `The ${adminSave.nombres} is already saved in the DB`
        });
    }
    const admin = await model.save(adminSave);
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  saveAdministrator
};
