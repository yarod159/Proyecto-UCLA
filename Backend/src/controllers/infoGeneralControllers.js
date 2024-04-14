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


module.exports = { postInfoGeneral, getInfoGeneral };