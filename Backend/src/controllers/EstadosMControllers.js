const Estados = require("../models/Estados");
const Municipios = require("../models/Municipios");

const postEstados = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const estados = new Estados({
      estado: req.body.estado,
      estatus: req.body.estatus,
    });

    // Guardar el empleado en la base de datos
    await estados.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: estados,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const postMunicipios = async (req, res) => {
  try {
    // Parsear el cuerpo de la solicitud para obtener los municipios
    const municipiosData = req.body.municipios;

    // Crear nuevas instancias de Municipios con los datos del formulario
    const municipios = municipiosData.map(
      (municipioData) =>
        new Municipios({
          municipio: municipioData.municipio,
          estatus: municipioData.estatus,
          estado: municipioData.estado,
        })
    );

    // Guardar los municipios en la base de datos
    await Municipios.insertMany(municipios);

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: municipios,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getEstadosM = async (req, res) => {
  try {
    const municipio = await Municipios.find().populate("Estado");

    console.log("Estados encontrados:", municipio);
    // Enviar la lista de empleados como respuesta
    res.status(200).json({
      success: true,
      data: municipio,
    });
  } catch (error) {
    console.error("Error fetching municipio:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener los municipio",
    });
  }
};

const getSoloEstados = async (req, res) => {
  try {
    const estados = await Estados.find();
    let data = [];

    for (const value of estados) {
        const {
        _id,
        estado

        }=value;
      const municipios = await Municipios.find({ estado:_id });
      data.push({
        _id,
        estado,
        municipios,

      });
    }
    console.log("Estados encontrados:", estados);
    // Enviar la lista de empleados como respuesta
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching estados:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener los estados",
    });
  }
};

module.exports = { postEstados, postMunicipios, getEstadosM, getSoloEstados };
