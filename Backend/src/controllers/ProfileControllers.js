// Importar el modelo Profile
const Profile = require("../models/Profile");
const authenticateToken = require("../middlewares/authMiddleware");
// Importar el modelo Profile

// Método para obtener un perfil específico basado en el ID del usuario
const getProfile = async (req, res) => {
  try {
    const auth = await authenticateToken(req, res);

    if (!auth)
      return res.status(403).json({ message: "Usuario no autenticado." });

    // Buscar el perfil correspondiente al usuario
    const profile = await Profile.findOne({ user: auth._id }).populate(
      "user",
      "-password"
    ); // Usamos populate para llenar el campo 'user' con información del usuario, excluyendo la contraseña

    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }

    // Enviar el perfil encontrado
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al procesar tu solicitud");
  }
};

// Método para obtener un perfil específico basado en el ID del usuario
const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await Profile.findOne({ user: userId }).populate(
      "user",
      "-password"
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Perfil no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener el perfil",
    });
  }
};

// Método para crear un nuevo perfil
const createProfile = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud



    const { name, apellido, cedula, telefono, direccion, dateCumple } =
      req.body;

    // Validar los datos recibidos
    if (!name || !apellido || !cedula || !telefono || !direccion) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios." });
    }
  
    // Extraer el userId de la URL
    const userId = req.params.userId;

    // Crear un nuevo perfil con los datos recibidos y el ID del usuario extraído de la URL

    const existeProfile = await Profile.findOne({user: userId })

    if(existeProfile){
      existeProfile.name.body
      console.log(existeProfile)
      return
    }

    const newProfile = new Profile({
      name,
      apellido,
      cedula,
      telefono,
      direccion,
      dateCumple,
      user: req.user._id,
    });

    // Guardar el nuevo perfil en la base de datos
    await newProfile.save();

    // Enviar una respuesta indicando éxito
    res.status(201).json(newProfile);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al procesar tu solicitud");
  }
};

// Método para obtener un perfil completo con detalles del usuario
const getCompleteProfile = async (req, res) => {
  try {
    // Buscar todos los perfiles
    const profiles = await Profile.find()
      .populate("user", "-password") // Llenar el campo 'user' con información del usuario, excluyendo la contraseña
      .exec(); // Ejecutar la consulta

    if (!profiles || profiles.length === 0) {
      return res.status(404).json({ message: "No se encontraron perfiles" });
    }

    // Enviar todos los perfiles encontrados
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al procesar tu solicitud");
  }
};

module.exports = { getProfile, createProfile, getUser, getCompleteProfile };
