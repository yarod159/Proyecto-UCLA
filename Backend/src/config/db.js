const mongoose = require("mongoose");
require('dotenv').config();
const password = process.env.MONGO_PASSWORD;

const dbURI = `mongodb+srv://asdrubalmorales34:${password}@cluster0.llulp3s.mongodb.net/`;
/*const dbURI = `mongodb://localhost:27017`
*/

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.log("Error al conectar a MongoDB");
  });

module.exports = mongoose;
