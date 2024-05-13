const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Configuración del puerto
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the exported mongoose object
const mongoose = require("./src/config/db");

// Import and use the getUsers function from controllers
const userRouter = require("./src/routes/userRoutes");


////////////...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Rutas
app.use("/auth", require("./src/routes/authRoutes"));
app.use("/empleado", require('./src/routes/crearEmpleadoRoutes'))
app.use("/instalador", require('./src/routes/instalacionRoutes'))
app.use("/informacionGeneral", require('./src/routes/infoGeneralRoutes'))
app.use("/servCliente", require('./src/routes/servClienteRoutes'))
app.use("/users", userRouter); // Usa userRouter como middleware

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
