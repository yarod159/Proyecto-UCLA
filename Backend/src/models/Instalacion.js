const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const instalacionSchema = new Schema({
 nombreEmpresa: {
    type: String,
   
 },
 numeroTelefono: {
    type: String,
    
 },
 mision: {
    type: String,
   
 },
 vision: {
    type: String,
    
 },
 titulo: {
   type: String,
},
quienesSomos: {
   type: String,
   
},
 
});

// Creación del modelo
const Instalacion = mongoose.model('Instalacion', instalacionSchema);

module.exports = Instalacion;
