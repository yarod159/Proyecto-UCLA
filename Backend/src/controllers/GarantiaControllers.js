const Garantia = require("../models/Garantia");
// Asegúrate de ajustar la ruta según la estructura de tu proyecto

const postGarantia = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const garantia = new Garantia({
      nombre: req.body.nombre,
      correo: req.body.correo,
      telefono: req.body.telefono,
      fecha: req.body.fecha,
      descripcion: req.body.descripcion,
    });

    // Guardar el empleado en la base de datos
    await garantia.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: garantia,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};





const getGarantia = async (req, res) => {
  try {
    const garantia = await Garantia.find();
    res.status(200).json({
      success: true,
      data: garantia,
    });
  } catch (error) {
    console.error("Error garantia:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion",
    });
  }
};

const deleteGarantia = async (req, res) => {
  try {
    
     const garantiaId = req.params.id; // Si el ID se envía como parámetro en la URL

     const result = await Garantia.findByIdAndDelete(garantiaId);
 
     if (!result) {
       // Si no se encuentra la FAQ, enviar un mensaje de error
       return res.status(404).json({
         success: false,
         message: "No se encontró la garantia con el ID proporcionado",
       });
     }
 
     // Enviar una respuesta al cliente indicando que la FAQ fue eliminada exitosamente
     res.status(200).json({
       success: true,
       message: "La garantia se eliminó exitosamente",
     });
  } catch (error) {
     // Enviar un mensaje de error al cliente
     res.status(500).json({
       success: false,
       message: "Error al intentar eliminar la garantia",
       error: error.message,
     });
  }
 };


module.exports = { 
  postGarantia, 
  getGarantia,
  deleteGarantia, 
};
