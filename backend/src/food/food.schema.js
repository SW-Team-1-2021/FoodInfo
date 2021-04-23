'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let foodSchema = new Schema({
  categoria: String,
  nombre: String,
  segundonombre: String,
  procedencia: String,
  categorias: String,
  horainicio: String,
  horafinal: String,
  advertencia: String,
  combinacion: String,
  descripcion: String,
  imagen: {
    data: Buffer,
    contentType: String
  }
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = {
  foodSchema
};
