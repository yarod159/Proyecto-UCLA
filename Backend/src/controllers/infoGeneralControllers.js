const InfoGeneral = require("../models/infoGeneral");

const postInfoGeneral = async (req, res) => {
  try {
    const infoGeneral = new InfoGeneral({
      nombreEmpresa: req.body.nombreEmpresa,
      rifEmpresa: req.body.rifEmpresa,
      telefono: req.body.telefono,
      ubicacion: req.body.ubicacion,
      correo: req.body.correo,
      linkFacebook: req.body.linkFacebook,
      linkInstagram: req.body.linkInstagram,
    });
      // Guardar la informacion general en la base de datos
      await infoGeneral.save();

      // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: infoGeneral,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getInfoGeneral = async (req, res) => {
  try {
    const infoGeneral = await InfoGeneral.find();
    res.status(200).json({
      success: true,
      data: infoGeneral,
    });
  } catch (error) {
    console.error("Error fetching infoGeneral:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion General",
    });
  }
};
const deleteInfoGeneral = async (req, res) => {
  try {
     // Asegúrate de que el ID de la FAQ se envía en la URL o en el cuerpo de la solicitud
     const infoGeneralId = req.params.id; // Si el ID se envía como parámetro en la URL
     // const faqId = req.body.id; // Si el ID se envía en el cuerpo de la solicitud
 
     // Buscar y eliminar la FAQ por su ID
     const result = await InfoGeneral.findByIdAndDelete(infoGeneralId);
 
     if (!result) {
       // Si no se encuentra la informacion, enviar un mensaje de error
       return res.status(404).json({
         success: false,
         message: "No se encontró la info General con el ID proporcionado",
       });
     }
 
     // Enviar una respuesta al cliente indicando que la informacion fue eliminada exitosamente
     res.status(200).json({
       success: true,
       message: "Info General eliminado exitosamente",
     });
  } catch (error) {
     // Enviar un mensaje de error al cliente
     res.status(500).json({
       success: false,
       message: "Error al intentar eliminar la informacion General",
       error: error.message,
     });
  }
 };

module.exports = { postInfoGeneral, getInfoGeneral, deleteInfoGeneral };