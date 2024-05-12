const mongoose = require("mongoose");
const { Schema } = mongoose;
const userDesktopSchema = new Schema({
    usuario: {
      type: String,
    },
    password: {
      type: String,
    }, 
    rol: {
        type: String,
      },
  },
);

const UserDesktop = mongoose.model("UserDesktop", userDesktopSchema);

module.exports = UserDesktop;
