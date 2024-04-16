const mongoose = require("mongoose");
const { Schema } = mongoose;

const infoGeneralSchema = new Schema({
    nombreEmpresa: {
      type: String,
      required: true,
      trim: true,
    },
    rifEmpresa: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    ubicacion: {
      type: String,
      required: true,
      trim: true,
    },
    correo: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (correo) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo),
        message: "Por favor, ingrese un correo electrónico válido.",
      },
    },
    linkFacebook: {
      type: String,
      trim: true,
    },
    linkInstagram: {
      type: String,
      trim: true,
    },
 },
 
);

const InfoGeneral = mongoose.model("InfoGeneral", infoGeneralSchema);

module.exports = InfoGeneral;
