const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  descripcion: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Tecnologia", "Ropa", "Hogar", "Belleza", "Otros"],
  },
  imagen: {
    type: String,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  creadoEn: {
    type: Date,
    default: Date.now,
  },
});

const Producto = mongoose.model("Producto", productSchema);

module.exports = Producto;
