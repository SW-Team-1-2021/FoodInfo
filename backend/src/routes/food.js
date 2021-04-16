'use strict';

const express = require('express');
const foodController = require('../food/food.controller');

const router = express.Router();
router
  .post('/', foodController.saveFood);

module.exports = router;
'use strict';

const express = require('express');
const foodController = require('../food/food.controller');

const router = express.Router();

router.get('food/add', (req, res) => {
  res.render('foodtest/new-food');
});

router.post('/foodtest/new-food', (req, res) => {
  const { categoria, nombre, segundonombre, procedencia, calegorias, horainicio, horafinal, advertencia, combinacion, descripcion, imagen } = req.body;
  const errors = [];
  if (!categoria) {
    errors.push({ text: 'Por favor selecciona una categoria' });
  }
  if (!nombre) {
    errors.push({ text: 'Por favor ingresa nombre' });
  }
  if (!procedencia) {
    errors.push({ text: 'Por favor ingresa una procedencia' });
  }
  if (!calegorias) {
    errors.push({ text: 'Por favor ingresa calorias' });
  }
  if (!descripcion) {
    errors.push({ text: 'Por favor ingresa una descripcion' });
  }
  if (!imagen) {
    errors.push({ text: 'Por favor ingresa una imagen' });
  }
  if (errors.length > 0) {
    res.render('foodtest/new-food', {
      errors,
      categoria,
      nombre,
      procedencia,
      calegorias,
      descripcion,
      imagen
    });
  } else {
    router
      .post('/', foodController.saveFood);
    res.send('ok');
  }
});


module.exports = router;
