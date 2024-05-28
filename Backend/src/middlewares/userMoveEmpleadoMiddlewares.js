const User = require("../models/User");
const Empleado = require("../models/Empleado");
const Profile = require("../models/Profile")



async function updateEmpleadoWhenRoleChanges(req, res, next) {
    const userId = req.params.userId;
    const newRole = req.body.role;
  
    if (newRole === 'empleado') {
      const userProfile = await Profile.findOne({ user: userId });
      console.log('uereee:',userProfile)
      if (userProfile) {
        const empleadoData = {
          nombre:userProfile.name,
          cedula: userProfile.cedula,
          apellido: userProfile.apellido,
          telefono: userProfile.telefono,
          direccion: userProfile.direccion,
          dateCumple: userProfile.dateCumple,
          ocupacion: '', // puedes agregar un valor predeterminado o dejarlo vacío
          user:userId,
          profile:userProfile._id,
          estatus: 'Activo', // puedes agregar un valor predeterminado o dejarlo vacío
        };
  
        const empleado = await Empleado.findOneAndUpdate({ cedula: userProfile.cedula }, empleadoData, { upsert: true, new: true });
        console.log(`Empleado actualizado: ${empleado}`);
      }
    }
  
    next();
  }
  module.exports = updateEmpleadoWhenRoleChanges;