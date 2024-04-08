const Instalacion = require("../models/Instalacion");
const Faq = require("../models/Faq");
// Asegúrate de ajustar la ruta según la estructura de tu proyecto

const postInstalacion = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const instalacion = new Instalacion({
      nombreEmpresa: req.body.nombreEmpresa,
      numeroTelefono: req.body.numeroTelefono,
      mision: req.body.mision,
      vision: req.body.vision,
    });

    // Guardar el empleado en la base de datos
    await instalacion.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: instalacion,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getInstalacion = async (req, res) => {
  try {
    const instalacion = await Instalacion.find();
    res.status(200).json({
      success: true,
      data: instalacion,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion",
    });
  }
};

const postPreguntaFaq =async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const faq = new Faq({
      
      PreguntaFaq : req.body.PreguntaFaq,
      RespuestaFaq : req.body.RespuestaFaq 
    });

    // Guardar el empleado en la base de datos
    await faq.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data:faq,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


module.exports = { postInstalacion, getInstalacion,postPreguntaFaq };
