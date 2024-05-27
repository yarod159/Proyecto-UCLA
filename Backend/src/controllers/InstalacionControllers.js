const Instalacion = require("../models/Instalacion");
const Faq = require("../models/Faq");
const MetPago = require("../models/MetodoPago");
const CompSistema = require("../models/ComponenteSistema")
const ServOfrecido = require("../models/servicioOfrecido")
// Asegúrate de ajustar la ruta según la estructura de tu proyecto

const postInstalacion = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const instalacion = new Instalacion({
      nombreEmpresa: req.body.nombreEmpresa,
      titulo: req.body.titulo,
      eslogan: req.body.eslogan,
      nTitulo: req.body.nTitulo,
      nosotros: req.body.nosotros,
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


const putInstalacion = async (req, res) => {
  try {
    // Buscar el registro de instalación por su ID
    const instalacion = await Instalacion.findById(req.params.id);

    if (!instalacion) {
      // Si no se encuentra la instalación, enviar un error
      return res.status(404).json({
        success: false,
        error: "Instalación no encontrada",
      });
    }

    // Actualizar los campos de la instalación con los nuevos valores recibidos
    instalacion.set({
      nombreEmpresa: req.body.nombreEmpresa || instalacion.nombreEmpresa,
      titulo: req.body.titulo || instalacion.titulo,
      eslogan: req.body.eslogan || instalacion.eslogan,
      nTitulo: req.body.nTitulo || instalacion.nTitulo,
      nosotros: req.body.nosotros || instalacion.nosotros,
      numeroTelefono: req.body.numeroTelefono || instalacion.numeroTelefono,
      mision: req.body.mision || instalacion.mision,
      vision: req.body.vision || instalacion.vision,
    });

    // Guardar la instalación actualizada en la base de datos
    await instalacion.save();

    // Enviar una respuesta al cliente indicando éxito
    res.status(200).json({
      success: true,
      data: instalacion,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(500).json({
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


const postServOfrecido = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const servOfrecido = new ServOfrecido({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
    });

    // Guardar el empleado en la base de datos
    await servOfrecido.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: servOfrecido,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getIServOfrecido = async (req, res) => {
  try {
    const servOfrecido = await ServOfrecido.find();
    res.status(200).json({
      success: true,
      data: servOfrecido,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion",
    });
  }
};

const deleteServOfrecido = async (req, res) => {
  try {
     // Asegúrate de que el ID de la FAQ se envía en la URL o en el cuerpo de la solicitud
     const servOfrecidoId = req.params.id; // Si el ID se envía como parámetro en la URL
     // const faqId = req.body.id; // Si el ID se envía en el cuerpo de la solicitud
 
     // Buscar y eliminar la FAQ por su ID
     const result = await ServOfrecido.findByIdAndDelete(servOfrecidoId);
 
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

 const postMetPago = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const metodoPago = new MetPago({
      Banco: req.body.Banco,
      Identificacion: req.body.Identificacion,
      Beneficiario: req.body.Beneficiario,
      NumeroTelefono: req.body.NumeroTelefono,
      NumeroCuenta: req.body.NumeroCuenta,
    });

    // Guardar el empleado en la base de datos
    await metodoPago.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: metodoPago,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getMetPago = async (req, res) => {
  try {
    const metodoPago = await MetPago.find();
    res.status(200).json({
      success: true,
      data: metodoPago,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion",
    });
  }
};

const postCompSistema = async (req, res) => {
  try {
    // Crear una nueva instancia de Empleado con los datos del formulario
    const compSistema = new CompSistema({
      installation: req.body.installation,
      products: req.body.products,
      maintenance: req.body.maintenance,
      repair: req.body.repair,
    });

    // Guardar el empleado en la base de datos
    await compSistema.save();

    // Enviar una respuesta al cliente
    res.status(201).json({
      success: true,
      data: compSistema,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getCompSistema = async (req, res) => {
  try {
    const compSistema = await CompSistema.find();
    res.status(200).json({
      success: true,
      data: compSistema,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener la informacion",
    });
  }
};

const putCompSistema = async (req, res) => {
  try {
    // Buscar el registro de instalación por su ID
    const compSistema = await CompSistema.findById(req.params.id);

    if (!compSistema) {
      // Si no se encuentra la instalación, enviar un error
      return res.status(404).json({
        success: false,
        error: "Componente no encontrado",
      });
    }

    // Actualizar los campos de la instalación con los nuevos valores recibidos
    compSistema.set({
      installation: req.body.installation || compSistema.installation,
      products: req.body.products || compSistema.products,
      maintenance: req.body.maintenance || compSistema.maintenance,
      repair: req.body.repair || compSistema.repair,
     
    });

    // Guardar la instalación actualizada en la base de datos
    await compSistema.save();

    // Enviar una respuesta al cliente indicando éxito
    res.status(200).json({
      success: true,
      data: compSistema,
    });
  } catch (error) {
    // Enviar un mensaje de error al cliente
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
 


module.exports = { 
  postInstalacion, 
  getInstalacion,
  postPreguntaFaq,
  getFaq,
  deleteFaq, 
  putInstalacion, 
  postMetPago, 
  getMetPago, 
  putCompSistema, 
  postCompSistema, 
  getCompSistema, 
  postServOfrecido,
  getIServOfrecido,
  deleteServOfrecido

};
