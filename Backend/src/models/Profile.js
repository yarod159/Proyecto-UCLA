const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false, 
      required: false, // Name is mandatory
      trim: true, // Removes leading/trailing whitespace
      minlength: 3, // Minimum name length enforce
      maxlength: 50, // Maximum name length enforce
    }, 
    apellido: {
      type: String,
       // Ensures unique names
      required: false, // Name is mandatory
      trim: true, // Removes leading/trailing whitespace
      minlength: 3, // Minimum name length enforce
      maxlength: 50, // Maximum name length enforce
    },
    cedula: {
      type: String,
       // Ensures unique names
      required: false, // Name is mandatory
      trim: true, // Removes leading/trailing whitespace
      minlength: 3, // Minimum name length enforce
      maxlength: 50, // Maximum name length enforce
    },

    telefono: {
      type: String,
       // Ensures unique names
      required: false, // Name is mandatory
      trim: true, // Removes leading/trailing whitespace
      minlength: 3, // Minimum name length enforce
      maxlength: 50, // Maximum name length enforce
    },
    direccion: {
      type: String,
       // Ensures unique names
      required: false, // Name is mandatory
      trim: true, // Removes leading/trailing whitespace
      minlength: 3, // Minimum name length enforce
      maxlength: 50, // Maximum name length enforce
    },
    dateCumple: {
      // Optional birthday field
      type: Date,
      required: false,
    },
   
   
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
   }
  },
  {
    timestamps: true,
    versionKey:false,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
/*
const User = require('../models/User');
const Empleado = require('../models/Empleado');
const Profile = require('../models/Profile');

exports.updateProfile = async (req, res) => {
  try {
    const { role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      req.body,
      { new: true }
    );

    if (role && role === 'empleado' && !updatedUser.profile) {
      const {
        name,
        apellido,
        cedula,
        telefono,
        direccion,
        dateCumple,
        estatus,
      } = req.body;

      // Create a new Empleado document
      const newEmpleado = new Empleado({
        cedula,
        nombre: name,
        apellido,
        telefono,
        direccion,
        ocupacion: 'New Employee', // Add the appropriate default value
        dateCumple,
        estatus,
      });

      await newEmpleado.save();

      // Delete the profile fields from the User document
      await User.findByIdAndUpdate(
        req.user._id,
        { $unset: { name: '', apellido: '', cedula: '', telefono: '', direccion: '', dateCumple: '', estatus: '' } },
        { new: true }
      );

      // Create a new Profile document
      const newProfile = new Profile({
        name,
        apellido,
        cedula,
        telefono,
        direccion,
        dateCumple,
        user: req.user._id,
      });

      await newProfile.save();

      return res.status(200).json({ message: 'Profile updated and employee created successfully', user: updatedUser, empleado: newEmpleado, profile: newProfile });
    } else if (role && role === 'empleado' && updatedUser.profile) {
      // If the user already has a profile, update the Empleado document
      const {
        name,
        apellido,
        cedula,
        telefono,
        direccion,
        dateCumple,
        estatus,
      } = req.body;

      await Empleado.findOneAndUpdate(
        { user: req.user._id },
        {
          cedula,
          nombre: name,
          apellido,
          telefono,
          direccion,
          dateCumple,
          estatus,
        },
        { new: true }
      );

      return res.status(200).json({ message: 'Profile updated and employee updated successfully', user: updatedUser, empleado: updatedEmpleado });
    }

    return res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating profile', error });
  }
};
*/