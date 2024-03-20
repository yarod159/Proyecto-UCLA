const nodemailer = require("nodemailer");
require('dotenv').config();
const port = process.env.PORT;

const sendVerificationEmail = async (email, verificationToken) => {
  // Crear un transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Componer el mensaje del correo electrónico
  const mailOptions = {
    from: "Kinettika.com",
    to: email,
    subject: "Verificación de correo electrónico",
    text: `Haga clic en el siguiente enlace para verificar su correo electrónico: http://localhost:${port}/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error al enviar el correo electrónico", error);
  }
};

module.exports =  sendVerificationEmail ;
