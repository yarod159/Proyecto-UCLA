const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Configuración del puerto
const port = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true // Permite el envío de credenciales
}));
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
app.use("/servCliente", require('./src/routes/servClienteRoutes'))
app.use("/users", userRouter); // Usa userRouter como middleware

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
/**
 * 
 * 
 * const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require('axios');
const app = express();





// Configuración del puerto
const port = process.env.PORT || 3000;

// Middlewares
app.use(
  cors({
    credentials: true,
    origin: 3000,
  })
);
app.use(express.json());
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN || ''}`;
// Connect to MongoDB using the exported mongoose object
const mongoose = require("./src/config/db");

// Import and use the getUsers function from controllers
const userRouter = require("./src/routes/userRoutes");


////////////...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Rutas
app.use("/auth", require("./src/routes/authRoutes"));
app.use("/empleado", require('./src/routes/crearEmpleadoRoutes'))
app.use("/instalador", require('./src/routes/instalacionRoutes'))
app.use("/servCliente", require('./src/routes/servClienteRoutes'))
app.use("/users", userRouter); // Usa userRouter como middleware

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

 */