'use strict';

const model = require('./administrator.model');
const errorBuilder = require('../commons/error-builder');

const CONFLICT = 'conflict';
const EMAIL = 'email';

async function saveAdministrator(req, res) {
  try {
    let adminSave = req.body;
    let result = await model.findByEmail(adminSave);

    if (result.length > 0) {
      throw errorBuilder.build(
        CONFLICT,
        {
          name: 'Data Repetition',
          message: `The email '${adminSave.email}' is already saved in the DB`
        });
    }

    result = await model.findByCi(adminSave);

    if (result.length > 0) {
      throw errorBuilder.build(
        CONFLICT,
        {
          name: 'Data Repetition',
          message: `The ci '${adminSave.ci}' is already saved in the DB`
        });
    }
    const admin = await model.save(adminSave);
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}


async function getAdmin(req, res) {
  try {
    const QUERY = [];
    for (const key in req.query)
      QUERY.push(key);

    let admin;
    switch (QUERY[0]) {
      case EMAIL : admin = await model.findByEmailAndCi(req.query[EMAIL]);
        break;
      default : admin = await model.getdata();
        break;
    }

    return res.status(200).json(admin);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}


async function getAdminById(req, res) {
  try {
    const admin = await model.getDataById(req.params.id);
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  saveAdministrator,
  getAdmin,
  getAdminById
};
