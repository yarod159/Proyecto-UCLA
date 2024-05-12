const UserDesktop = require("../models/userDesktop");

const postUserDesktop = async (req, res) => {
  try {
    const userDesktop = new UserDesktop({
      usuario: req.body.usuario,
      password: req.body.password,
      rol: req.body.rol,
    });
      // Guardar la informacion general en la base de datos
      await userDesktop.save();

      // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: userDesktop,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getUserDesktop = async (req, res) => {
  try {
    const userDesktop = await UserDesktop.find();
    res.status(200).json({
      success: true,
      data: userDesktop,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener los usuarios",
    });
  }
};



module.exports = { postUserDesktop, getUserDesktop  };