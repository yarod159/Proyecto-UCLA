const ReporteCliente = require("../models/ReporteCliente");

// Asegúrate de ajustar la ruta según la estructura de tu proyecto

const postReporteCliente = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const reporteCliente = new ReporteCliente({
      tituloProblema: req.body.tituloProblema,
      descripcionProblema: req.body.descripcionProblema,
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


module.exports = { postReporteCliente, getReporteCliente };
