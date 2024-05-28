const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const garantiaSchema = new Schema({
    nombre: {
        type: String,
        required: true, // Make this field required
     },
     correo: {
        type: String,
        required: true, // Make this field required
     },
     telefono: {
        type: String,
        required: true, // Make this field required
     },
     fecha: {
        type: String,
        required: true, // Make this field required
     },
     descripcion: {
        type: String,
        required: true, // Make this field required
     }
});

// Creación del modelo
const Garantia = mongoose.model('Garantia', garantiaSchema);

module.exports = Garantia;