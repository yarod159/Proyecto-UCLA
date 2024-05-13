const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const MetodoPagoSchema = new Schema({
    Banco: {
        type: String,
        required: true, // Make this field required
     },
     Identificacion: {
        type: String,
        required: true, // Make this field required
     },
     Beneficiario: {
        type: String,
        required: true, // Make this field required
     },
     NumeroTelefono: {
        type: String,
        required: true, // Make this field required
     },
     NumeroCuenta: {
        type: String,
        required: true, // Make this field required
     }
});

// Creación del modelo
const MetodoPago = mongoose.model('MetodoPago', MetodoPagoSchema);

module.exports = MetodoPago;