const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const SolGarantiaSchema = new Schema({
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
const SolGarantia = mongoose.model('SolGarantia', SolGarantiaSchema);

module.exports = SolGarantia;