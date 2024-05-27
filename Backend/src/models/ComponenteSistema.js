const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const componenteSistemaSchema = new Schema({
    installation: {
    type: String,
   
 },
 products: {
   type: String,
  
},
maintenance: {
   type: String,
  
},
repair: {
   type: String,
  
},
 
});

// Creación del modelo
const ComponenteSistema = mongoose.model('CompSistema', componenteSistemaSchema);

module.exports = ComponenteSistema;