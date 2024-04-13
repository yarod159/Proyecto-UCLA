const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema
const ReporteClienteSchema = new Schema({
    tituloProblema: {
        type: String,
        required: true, // Make this field required
     },
     descripcionProblema: {
        type: String,
        required: true, // Make this field required
     }
});

// Creación del modelo
const ReporteCliente = mongoose.model('ReporteCliente', ReporteClienteSchema);

module.exports = ReporteCliente;