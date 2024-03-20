const jwt = require('jsonwebtoken'); // Make sure to import jwt
const crypto = require('crypto'); // Import crypto module
const { secretKey } = require("../config/secret"); // Import secretKey

const sendVerificationEmail = require("../utils/email");
//aqui
const User = require("../models/User");
const express = require("express")
const {matchedData} = require("express-validator")
const {compare,encrypt} = require("../utils/handleJwt");  
const { tokenSign } = require('../utils/handleToken');



const register = async (req, res) => {
try {
    const password = await encrypt(req.body.password);
    const body = {
      ...req.body, // Assuming you want to include other fields from the request body
      password,
    };
    const dataUser = await User.create(body);
    
    const data = {
      token : await tokenSign(dataUser) , 
      user : dataUser
    }

    res.send(data); // Directly sending the data object

 } catch (error) {
    res.status(500).send({ error: error.message });
 }
};
 

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const user = await User.findOne({ email }).select('+password');

    if (!user) {  
      return res.status(404).json({ message: "El usuario  ya existe" });
    }
    if (!password || !user.password) {
      console.log('Password or user password is undefined:', { password, userPassword: user.password });
      return res.status(400).json({ message: "falta la contrasena" });
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({ message: "password incorrecta" });
    }
     

    const tokenJwt = await tokenSign(user);
    user.set('password', undefined, {strict:false})
    const data = {
      token: tokenJwt,
      user: user,
    };

    res.send({ data });
  } catch (error) {
    console.log("Error al registrar al usuario", error);
     res.status(500).json({ message: error.message || "Inicio de sesion fallido" });
  }
};

module.exports = { register, login };


