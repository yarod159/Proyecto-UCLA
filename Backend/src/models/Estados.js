const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para los estados
const EstadoSchema = new Schema({
  estado: String,
  estatus: {
    required: false,
    type: String,
    enum: ["Activo", "Inactivo"],
    
  },
}, {
  timestamps: true,
  versionKey: false
});

// Creación de los modelos
const Estado = mongoose.model('Estado', EstadoSchema);
module.exports = Estado;