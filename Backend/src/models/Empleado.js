const mongoose = require("mongoose");
const { Schema } = mongoose;

const empleadoSchema = new Schema({
  cedula: { unique: true, required: true, type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { required: true, type: String, required: true },
  telefono: { required: true, type: String, required: true },
  direccion: { required: true, type: String, required: true },
  ocupacion: { required: true, type: String, required: true },
  dateCumple: {
    type: Date,
    required: false,
  },
  estatus: {
    required: true,
    type: String,
    enum: ["Activo", "Inactivo"],
    required: true,
  },
   
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});

const Empleado = mongoose.model("Empleado", empleadoSchema);

module.exports = Empleado;
