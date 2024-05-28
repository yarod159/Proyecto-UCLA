const SolicitudDeServicios = require('../models/SolicitudDeServicios'); // Asegúrate de ajustar la ruta según la estructura de tu proyecto
const authenticateToken = require('../middlewares/authMiddleware');


const postSolicitudDeServicios = async (req, res) => {
    try {
       // Crear una nueva instancia de Empleado con los datos del formulario
        const solicitudDeServicios  = new SolicitudDeServicios ({
        municipios: req.body.municipios, 
        codigoPostal: req.body.codigoPostal, 
        Direccion: req.body.Direccion, 
        servicio: req.body.servicio, 
        marcaEquipo: req.body.marcaEquipo, 
        modeloEquipo: req.body.modeloEquipo, 
        numeroSerie: req.body.numeroSerie, 
        descripcion: req.body.descripcion, 
        tipoServicio: req.body.tipoServicio, 
        tipoVivienda: req.body.tipoVivienda, 
        estatus: req.body.estatus, 
        profile:req.body.profile
       });
   
       // Guardar el empleado en la base de datos
       await solicitudDeServicios.save();
   
       // Enviar una respuesta al cliente
       res.status(201).json({
         success: true,
         data:solicitudDeServicios,
       });
    } catch (error) {
       // Enviar un mensaje de error al cliente
       res.status(400).json({
         success: false,
         error: error.message,
       });
    }
   };

   module.exports = { postSolicitudDeServicios };