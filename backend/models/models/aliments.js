'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlimentsSchema = Schema({
  categoria: { type: String, enum: ['fruta', 'verdura', 'cereal', 'legumbre', 'tuberculo', 'fruto seco', 'carne'] },
  nameprin: String,
  namesecun: String,
  procedencia: String,
  calorias: Number,
  horarioinit: Date,
  horarioend: Date,
  advertencia: String,
  combinacionalimento: String,
  description: String,
  imagen: String
})

module.exports = mongoose.model('Aliment', AlimentsSchema)