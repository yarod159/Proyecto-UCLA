const ReporteCliente = require("../models/ReporteCliente");

// Asegúrate de ajustar la ruta según la estructura de tu proyecto

const postReporteCliente = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const reporteCliente = new ReporteCliente({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      fecha: req.body.fecha,
      message: req.body.message,
    });

    // Guardar el empleado en la base de datos
    await reporteCliente.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: reporteCliente,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getReporteCliente = async (req, res) => {
  try {
    const reporteCliente = await ReporteCliente.find();
    res.status(200).json({
      success: true,
      data: reporteCliente,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion",
    });
  }
};

const deleteReporteCliente = async (req, res) => {
  try {
     // Asegúrate de que el ID de la FAQ se envía en la URL o en el cuerpo de la solicitud
     const reporteId = req.params.id; // Si el ID se envía como parámetro en la URL
     // const faqId = req.body.id; // Si el ID se envía en el cuerpo de la solicitud
 
     // Buscar y eliminar la FAQ por su ID
     const result = await ReporteCliente.findByIdAndDelete(reporteId);
 
     if (!result) {
       // Si no se encuentra la FAQ, enviar un mensaje de error
       return res.status(404).json({
         success: false,
         message: "No se encontró el servicio con el ID proporcionado",
       });
     }
 
     // Enviar una respuesta al cliente indicando que la FAQ fue eliminada exitosamente
     res.status(200).json({
       success: true,
       message: "El servicio de instalacion ofrecido se eliminó exitosamente",
     });
  } catch (error) {
     // Enviar un mensaje de error al cliente
     res.status(500).json({
       success: false,
       message: "Error al intentar eliminar el servicio",
       error: error.message,
     });
  }
 };


module.exports = { postReporteCliente, getReporteCliente, deleteReporteCliente };
