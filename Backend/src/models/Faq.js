const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const FaqSchema = new Schema({
    PreguntaFaq: {
        type: String,
        required: true, // Make this field required
     },
     RespuestaFaq: {
        type: String,
        required: true, // Make this field required
     }
});

// Creación del modelo
const Faq = mongoose.model('Faq', FaqSchema);

module.exports = Faq;
