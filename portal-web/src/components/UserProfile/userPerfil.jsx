import React, { useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import EditIcon from '@mui/icons-material/Edit';
import "./userPerfil.css";

const Div = styled("div")(({ theme }) => ({
 ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const UserPerfil = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

 
  const [editing, setEditing] = useState({
    nombre: false,
    apellido: false,
    cedula: false,
    fechaNacimiento: false,
    correo: false,
    telefono: false,
    direccion: false,
    usuario: false,
    contraseña: false
  });

  const [userInfo, setUserInfo] = useState({
    nombre: "John",
    apellido: "Doe",
    cedula: "123456789",
    fechaNacimiento: "01/01/1990",
    correo: "estoesunaprueba@gmail.com",
    telefono: "04126202525",
    direccion: "La direccion esta en el cora",
    usuario: "Prueba1",
    contraseña: "lapassword123"
  });

  const handleEdit = (field) => {
    setEditing((prevEditing) => ({...prevEditing, [field]: true }));
  };

  const handleSave = (field, value) => {
    setUserInfo((prevUserInfo) => ({...prevUserInfo, [field]: value }));
    setTimeout(() => {
      setEditing((prevEditing) => ({...prevEditing, [field]: false }));
    }, 4000); // Utiliza setTimeout para asegurar que editing se actualiza después de que el estado de userInfo se haya actualizado
  };

  return (
    <div className="container-user-profile">
      <div className="wrapper-user-profile">
        <div className="user">
          <div className="userContainer">
            <div className="userUpdate">
              <span className="userUpdateTitle">Perfil</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                      <img
                        className="userUpdateImg"
                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                      />
                      <label htmlFor="file">
                        <IconButton
                          aria-label="upload picture"
                          component="span"
                        >
                          <PublishIcon />
                        </IconButton>
                      </label>
                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>

                  <div className="userUpdateItem1">
                    <List component="nav">
                      <ListItem
                        sx={{
                          textAlign: "center",
                          bgcolor: "#18a0a6",
                          marginTop: "-10px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          color: "#fff",
                        }}
                      >
                        <ListItemText>Informacion General</ListItemText>
                      </ListItem>
                      
                      <ListItem>
                        <DriveFileRenameOutlineIcon />
                        <ListItemText primary="Nombre: " />
                        {editing.nombre ? (
                          <TextField
                            sx={{width:"85%"}}
                            value={userInfo.nombre}
                            onChange={(e) => handleSave("nombre", e.target.value)}
                            onBlur={() => handleSave("nombre", userInfo.nombre)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSave("nombre", e.target.value);
                              }
                            }}
                          />
                        ) : (
                          <ListItemText primary={userInfo.nombre} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("nombre")}
                        >
                         <EditIcon />
                        </IconButton>
                      </ListItem>

                      <Divider />

                      <ListItem>
                      <PersonIcon />
                        <ListItemText primary="Apellido: " />
                        {editing.apellido? (
                          <TextField
                          sx={{width:"85%"}}
                            value={userInfo.apellido}
                            onChange={(e) => {
                              if (!editing.apellido) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("apellido", e.target.value);
                            }}
                            onBlur={() => handleSave("apellido", userInfo.apellido)} // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.apellido} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("apellido")}
                        >
                          <EditIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                      <BadgeIcon />
                        <ListItemText primary="Cédula: " />
                        {editing.cedula? (
                          <TextField
                          sx={{width:"85%"}}
                            value={userInfo.cedula}
                            onChange={(e) => {
                              if (!editing.cedula) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("cedula", e.target.value);
                            }}
                            onBlur={() => handleSave("cedula", userInfo.cedula)} // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.cedula} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("cedula")}
                        >
                           <EditIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                      <CalendarMonthIcon />
                        <ListItemText primary="Fecha de nacimiento: " />
                        {editing.fechaNacimiento? (
                          <TextField
                          sx={{width:"70%"}}
                            value={userInfo.fechaNacimiento}
                            onChange={(e) => {
                              if (!editing.fechaNacimiento) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("fechaNacimiento", e.target.value);
                            }}
                            onBlur={() => handleSave("fechaNacimiento", userInfo.fechaNacimiento)} // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.fechaNacimiento} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("fechaNacimiento")}
                        >
                         <EditIcon />
                        </IconButton>
                      </ListItem>
                    </List>
                  </div>

                  <div className="userUpdateItem1">
                    <List component="nav">
                      <ListItem
                        sx={{
                          textAlign: "center",
                          bgcolor: "#18a0a6",
                          marginTop: "-10px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          color: "#fff",
                        }}
                      >
                        <ListItemText>Contacto</ListItemText>
                      </ListItem>
                      
                      <ListItem>
                         <MarkEmailReadIcon />
                        <ListItemText primary="Correo: " />
                        {editing.correo ? (
                          <TextField
                            sx={{width:"85%"}}
                            value={userInfo.correo}
                            onChange={(e) => handleSave("correo", e.target.value)}
                            onBlur={() => handleSave("correo", userInfo.correo)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSave("correo", e.target.value);
                              }
                            }}
                          />
                        ) : (
                          <ListItemText primary={userInfo.correo} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("correo")}
                        >
                          <EditIcon /> 
                        </IconButton>
                      </ListItem>

                      <Divider />

                      <ListItem>
                      <PhoneAndroidIcon />
                        <ListItemText primary="Teléfono: " />
                        {editing.telefono? (
                          <TextField
                          sx={{width:"85%"}}
                            value={userInfo.telefono}
                            onChange={(e) => {
                              if (!editing.telefono) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("telefono", e.target.value);
                            }}
                            onBlur={() => handleSave("telefono", userInfo.telefono)} // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.telefono} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("telefono")}
                        >
                          <EditIcon /> 
                        </IconButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                      <HomeIcon />
                        <ListItemText primary="Dirección: " />
                        {editing.direccion? (
                          <TextField
                          sx={{width:"85%"}}
                            value={userInfo.direccion}
                            onChange={(e) => {
                              if (!editing.direccion) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("direccion", e.target.value);
                            }}
                            onBlur={() => handleSave("direccion", userInfo.direccion)} // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.direccion} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("direccion")}
                        >
                          <EditIcon /> 
                        </IconButton>
                      </ListItem>
                      
                    </List>
                  </div>

                  <div className="userUpdateItem1">
                    <List component="nav">
                      <ListItem
                        sx={{
                          textAlign: "center",
                          bgcolor: "#18a0a6",
                          marginTop: "-10px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          color: "#fff",
                        }}
                      >
                        <ListItemText>Seguridad</ListItemText>
                      </ListItem>
                      
                      <ListItem>
                      <AccountCircleIcon />
                        <ListItemText primary="Usuario: " />
                        {editing.usuario ? (
                          <TextField
                            sx={{width:"85%"}}
                            value={userInfo.usuario}
                            onChange={(e) => handleSave("usuario", e.target.value)}
                            onBlur={() => handleSave("usuario", userInfo.usuario)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSave("usuario", e.target.value);
                              }
                            }}
                          />
                        ) : (
                          <ListItemText primary={userInfo.usuario} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("usuario")}
                        >
                          <EditIcon /> 
                        </IconButton>
                      </ListItem>

                      <Divider />

                      <ListItem>
                        <HttpsIcon />
                        <ListItemText primary="Contraseña: " />
                        {editing.contraseña? (
                          <TextField
                          sx={{width:"85%"}}
                            value={userInfo.contraseña}
                            onChange={(e) => {
                              if (!editing.contraseña) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("contraseña", e.target.value);
                            }}
                            onBlur={() => handleSave("contraseña", userInfo.contraseña)} // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.contraseña} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("contraseña")}
                        >
                          <EditIcon />
                        </IconButton>
                      </ListItem>
                      
                    </List>
                  </div>





                </div>

                

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ alignItems: "center" }}
                >
                  Save Changes
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPerfil;