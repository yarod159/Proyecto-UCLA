const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const servOfrecidoSchema = new Schema({
    titulo: {
        type: String,
        required: true, // Make this field required
     },
     descripcion: {
        type: String,
        required: true, // Make this field required
     }
});

// Creación del modelo
const ServOfrecido = mongoose.model('servOfrecido', servOfrecidoSchema);

module.exports = ServOfrecido;