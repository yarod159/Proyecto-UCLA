const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const instalacionSchema = new Schema({
 nombreEmpresa: {
    type: String,
    required: true
 },
 numeroTelefono: {
    type: String,
    required: true
 },
 mision: {
    type: String,
    required: true
 },
 vision: {
    type: String,
    required: true
 }
});

// Creación del modelo
const Instalacion = mongoose.model('Instalacion', instalacionSchema);

module.exports = Instalacion;
