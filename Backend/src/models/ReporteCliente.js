const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const ReporteClienteSchema = new Schema({
    name: {
        type: String,
        required: true, // Make this field required
     },
     email: {
        type: String,
        required: true, // Make this field required
     },
     phone: {
      type: String,
      required: true, // Make this field required
      },
      fecha: {
         type: String,
         required: true, // Make this field required
      },
      message: {
         type: String,
         required: true, // Make this field required
      },
});

// Creación del modelo
const ReporteCliente = mongoose.model('ReporteCliente', ReporteClienteSchema);

module.exports = ReporteCliente;