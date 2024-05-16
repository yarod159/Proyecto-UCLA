const Instalacion = require("../models/Instalacion");
const Faq = require("../models/Faq");
const MetPago = require("../models/MetodoPago");
// Asegúrate de ajustar la ruta según la estructura de tu proyecto

const postInstalacion = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const instalacion = new Instalacion({
      nombreEmpresa: req.body.nombreEmpresa,
      numeroTelefono: req.body.numeroTelefono,
      mision: req.body.mision,
      vision: req.body.vision,
      titulo: req.body.titulo,
      quienesSomos: req.body.quienesSomos,
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
const deleteInstalacion = async (req, res) => {
  try {
    
     const instalacionId = req.params.id;
     
 
     
     const result = await Instalacion.findByIdAndDelete(instalacionId);
 
     if (!result) {
       // Si no se encuentra la informacion, enviar un mensaje de error
       return res.status(404).json({
         success: false,
         message: "No se encontró la instalacion con el ID proporcionado",
       });
     }
 

     res.status(200).json({
       success: true,
       message: "Instalacion eliminado exitosamente",
     });
  } catch (error) {
     // Enviar un mensaje de error
     res.status(500).json({
       success: false,
       message: "Error al intentar eliminar la instalacion",
       error: error.message,
     });
  }
 };
 const patchInstalacion = async (req, res) => {
  try {
     const instalacionId = req.params.id;
     const updateFields = req.body;
     const result = await Instalacion.findByIdAndUpdate(instalacionId, { $set: updateFields }, { new: true });
 
     if (!result) {
       return res.status(404).json({
         success: false,
         message: "No se encontró la instalacion con el ID proporcionado",
       });
     }
 
     res.status(200).json({
       success: true,
       data: result,
       message: "Instalacion actualizada exitosamente",
     });
  } catch (error) {
     res.status(500).json({
       success: false,
       message: "Error al intentar actualizar la instalacion",
       error: error.message,
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

const getFaq = async (req, res) => {
  try {
    const faq = await Faq.find();
    res.status(200).json({
      success: true,
      data: faq,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion",
    });
  }
};

const deleteFaq = async (req, res) => {
  try {
     // Asegúrate de que el ID de la FAQ se envía en la URL o en el cuerpo de la solicitud
     const faqId = req.params.id; // Si el ID se envía como parámetro en la URL
     // const faqId = req.body.id; // Si el ID se envía en el cuerpo de la solicitud
 
     // Buscar y eliminar la FAQ por su ID
     const result = await Faq.findByIdAndDelete(faqId);
 
     if (!result) {
       // Si no se encuentra la FAQ, enviar un mensaje de error
       return res.status(404).json({
         success: false,
         message: "No se encontró la pregunta FAQ con el ID proporcionado",
       });
     }
 
     // Enviar una respuesta al cliente indicando que la FAQ fue eliminada exitosamente
     res.status(200).json({
       success: true,
       message: "Pregunta FAQ eliminada exitosamente",
     });
  } catch (error) {
     // Enviar un mensaje de error al cliente
     res.status(500).json({
       success: false,
       message: "Error al intentar eliminar la pregunta FAQ",
       error: error.message,
     });
  }
 };
 


module.exports = { postInstalacion, getInstalacion, deleteInstalacion, patchInstalacion, postPreguntaFaq,getFaq,deleteFaq };
