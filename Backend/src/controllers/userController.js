const User = require("../models/User");
const Empleado = require('../models/Empleado')

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener los usuarios",
    });
  }
};


const moverEmpleado = async (req,res) => {
  try {
    // Buscar el usuario por su ID
    const { userId } = req.params;
   
    const user = await User.findOne({ user: _id }).populate('user', '-password');;
   

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    // Verificar si el usuario tiene el rol de "user" y está cambiando a "empleado"
    if (user.role.includes('user') &&!user.role.includes('empleado')) {
      // Crear un nuevo objeto de empleado con los datos del usuario
      const employeeData = {
        cedula: user.email.split('@')[0], // Ejemplo simple, ajusta según sea necesario
        nombre: user.nombre,
        apellido: user.apellido,
        telefono: user.telefono,
        direccion: user.direccion,
        ocupacion: user.role[0], // Asume que el primer elemento del rol es la ocupación
        dateCumple: new Date(), // Fecha de cumpleaños ficticia, ajusta según sea necesario
        estatus: 'Activo', // Estatus inicial, ajusta según sea necesario
      };

      // Insertar el nuevo empleado en la colección de empleados
      const newEmployee = new Empleado(employeeData);
      await newEmployee.save();

      // Eliminar el usuario de la colección de usuarios
      await User.deleteOne({ _id: userId });

      return { success: true, message: 'Usuario movido exitosamente a empleado.' };
    } else {
      return { success: false, message: 'El usuario ya es un empleado o no está cambiando de rol.' };
    }
  } catch (error) {
    console.error('Error al mover el usuario:', error.message);
    return { success: false, message: error.message };
  }
};


module.exports = {getUsers,moverEmpleado};