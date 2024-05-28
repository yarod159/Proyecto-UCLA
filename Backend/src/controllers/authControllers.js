const jwt = require('jsonwebtoken'); // Make sure to import jwt
const crypto = require('crypto'); // Import crypto module
const { secretKey } = require("../config/secret"); // Import secretKey
require("dotenv").config();
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
    console.log(error)
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

const verifyToken = async (req, res) => {
  // Extraer el token del encabezado Authorization
  const authHeader = req.headers.authorization;
  
  if (!authHeader) return res.status(401).send({ message: 'No tok provided' });

  // Dividir el encabezado por espacio y tomar el segundo elemento (el token)
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).send({ message: 'No token provided' });
  console.log('token:', token);
  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Buscar al usuario en la base de datos usando el ID decodificado del token
    const userFound = await User.findById(decoded._id);
    if (!userFound) return res.status(401).send({ message: 'User not found' });
   
    console.log('user:', userFound);
    // Devolver los detalles del usuario
    return res.json({
      id: userFound._id,
      email: userFound.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send({ message: 'Invalid token' });
  }
};


const putUserToEmpleados = async (req, res) => {
  try {
  const userId = req.params.userId;
  const newRole = req.body.role;

  const user = await User.findByIdAndUpdate(userId, { role: newRole }, { new: true });
  res.json({ message: `Rol actualizado a ${newRole}` });
  
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener los Empleados",
    });
  }
};


const getUserRole = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Buscar al usuario en la base de datos usando el ID proporcionado
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Devolver el rol del usuario
    res.json({
      role: user.role,
    });
  } catch (error) {
    console.error("Error al obtener el rol del usuario:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener el rol del usuario",
    });
  }
};


module.exports = { register, login,verifyToken, putUserToEmpleados,getUserRole  };


/**
 * 
 * 
const verifyToken = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];

  if (!token) return res.send(false);

  jwt.verify(token,  process.env.JWT_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user._id);
    if (!userFound) return res.sendStatus(401);
    console.log(userFound)
    return res.json({
      id: userFound._id,
      name: userFound.username,
      email: userFound.email,
    });
  });
};
 */



