const mongoose = require("mongoose");
const { Schema } = mongoose;

// Definición del esquema
const solicitudDeServiciosSchema = new Schema({
  estado: {
    type: String,
    required: false, 
  },
  municipios: {
    type: String,
    required: false, 
  },
  codigoPostal: {
    type: String,
    required: false, 
  },
  Direccion: {
    type: String,
    required: false, 
  },
  servicio: {
    type: String,
    required: true, 
  },
  marcaEquipo: {
    type: String,
    required: false, 
  },
  modeloEquipo: {
    type: String,
    required: false, 
  },
  numeroSerie: {
    type: String,
    required: false, 
  },
  descripcion: {
    type: String,
    required: false, 
  },
  tipoServicio: {
    type: String,
    required: false, 
  },
  tipoVivienda: {
    type: String,
    required: false, 
  },
  estatus: {
    required: true,
    type: String,
    enum: ["Activo", "Inactivo"],
    
    default: "Inactivo",
  },
   profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  
});

// Creación del modelo
const SolicitudDeServicios = mongoose.model(
  "solicitudDeServicios",
  solicitudDeServiciosSchema
);

module.exports = SolicitudDeServicios;
