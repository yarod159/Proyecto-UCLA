const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const instalacionSchema = new Schema({
 nombreEmpresa: {
    type: String,
   
 },
 titulo: {
   type: String,
  
},
eslogan: {
   type: String,
  
},
nTitulo: {
   type: String,
  
},
nosotros: {
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
 
});

// Creación del modelo
const Instalacion = mongoose.model('Instalacion', instalacionSchema);

module.exports = Instalacion;
