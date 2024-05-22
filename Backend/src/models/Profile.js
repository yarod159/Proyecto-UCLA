const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    
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

const Profile = mongoose.model("Profile ", profileSchema);

module.exports = Profile;
