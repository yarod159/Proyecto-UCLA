const Empleado = require('../models/Empleado'); // Asegúrate de ajustar la ruta según la estructura de tu proyecto
const authenticateToken = require('../middlewares/authMiddleware');


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
    // Verificar si el usuario está autenticado
   
    const auth = await authenticateToken(req, res)
   

    if (!auth) return res.status(403).json({ message: 'Usuario no autenticado.'});

    // Buscar el perfil correspondiente al usuario
    const empleados = await Empleado.find(); 
   
    // Buscar todos los empleados en la base de datos
    

    // Enviar la lista de empleados como respuesta
    res.status(200).json({
      success: true,
      data: empleados,
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener los Empleados",
    });
  }
};






module.exports = { postEmpleado, getEmpleados};