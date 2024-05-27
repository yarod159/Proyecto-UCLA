const mongoose = require('mongoose');
const { Schema } = mongoose;
// Esquema para los municipios
const MunicipioSchema = new Schema({
   
    estado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Estado'
    },
    estatus: {
        required: true,
        type: String,
        enum: ["Activo", "Inactivo"],
      
      },
    municipio: String
  }, {
    timestamps: true,
    versionKey: false
  });
  
  const Municipio = mongoose.model('Municipio', MunicipioSchema);
module.exports = Municipio;