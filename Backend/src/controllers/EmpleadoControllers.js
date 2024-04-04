const Empleado = require('../models/Empleado'); // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const postEmpleado = async (req, res) => {
 try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const empleado = new Empleado({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      ocupacion: req.body.ocupacion,
      dateCumple: req.body.dateCumple,
      estatus: req.body.estatus,
    });

    // Guardar el empleado en la base de datos
    await empleado.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: empleado,
    });
 } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
 }
};


const getEmpleados = async (req, res) => {
  try {
    const empleado = await Empleado.find();
    res.status(200).json({
      success: true,
      data: empleado,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener los Empleados",
    });
  }
};

module.exports = { postEmpleado, getEmpleados };