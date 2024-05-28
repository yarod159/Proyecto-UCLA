const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true, // Email is mandatory
      unique: true, // Ensures unique email addresses
      trim: true, // Removes leading/trailing whitespace
      lowercase: true, // Converts email to lowercase for consistency
      validate: {
        // Email address validation
        validator: (email) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        message: "Por favor ingresa un correo valido",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Enforces minimum password length
      select: false,
    },

    verified: {
      // Verification status (default: false)
      type: Boolean,
      default: false,
    },
    verificationToken: {
      // Optional verification token field
      type: String,
    },
    role: {
      type: ["user", "admin", "empleado"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
