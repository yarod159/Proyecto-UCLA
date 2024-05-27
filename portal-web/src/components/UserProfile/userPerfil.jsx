import React, { useState, useEffect } from "react";
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

import { getProfileRequest } from "../../api/profile";

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
  const [savedChanges, setSavedChanges] = useState(false);

  const [editing, setEditing] = useState({
    name: false,
    apellido: false,
    cedula: false,
    fechaNacimiento: false,
    direccion: false,
    telefono: false,
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    apellido: "",
    cedula: "",
    fechaNacimiento: "",
    direccion: "",
    telefono: "",
  });

  const getProfileData = async () => {
    const resp = await getProfileRequest();
    setUserInfo({
      nombre: resp.name,
      apellido: resp.apellido,
      cedula: resp.cedula,
      fechaNacimiento: new Date(resp.dateCumple).toLocaleDateString(),
      direccion: resp.direccion,
      telefono: resp.telefono,
    });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleEdit = (field) => {
    setEditing((prevEditing) => ({ ...prevEditing, [field]: true }));
  };

  const handleSave = (field, value) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [field]: value }));
    setSavedChanges(true);
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
                   {/*  <div className="userUpdateUpload">
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
                    </div>*/}
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
                        <ListItemText primary="Nombre: " />
                        {editing.nombre ? (
                          <TextField
                            sx={{ width: "85%" }}
                            value={userInfo.nombre}
                            onChange={(e) =>
                              handleSave("nombre", e.target.value)
                            }
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
                          <CommentIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemText primary="Apellido: " />
                        {editing.apellido ? (
                          <TextField
                            sx={{ width: "85%" }}
                            value={userInfo.apellido}
                            onChange={(e) => {
                              if (!editing.apellido) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("apellido", e.target.value);
                            }}
                            onBlur={() =>
                              handleSave("apellido", userInfo.apellido)
                            } // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.apellido} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("apellido")}
                        >
                          <CommentIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemText primary="Cédula: " />
                        {editing.cedula ? (
                          <TextField
                            sx={{ width: "85%" }}
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
                          <CommentIcon />
                        </IconButton>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemText primary="Fecha de nacimiento: " />
                        {editing.fechaNacimiento ? (
                          <TextField
                            sx={{ width: "70%" }}
                            value={userInfo.fechaNacimiento}
                            onChange={(e) => {
                              if (!editing.fechaNacimiento) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("fechaNacimiento", e.target.value);
                            }}
                            onBlur={() =>
                              handleSave(
                                "fechaNacimiento",
                                userInfo.fechaNacimiento
                              )
                            } // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.fechaNacimiento} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("fechaNacimiento")}
                        >
                          <CommentIcon />
                        </IconButton>
                      </ListItem>

                      <Divider />
                      <ListItem>
                        <ListItemText primary="Direccion: " />
                        {editing.direccion ? (
                          <TextField
                            sx={{ width: "70%" }}
                            value={userInfo.direccion}
                            onChange={(e) => {
                              if (!editing.direccion) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("direccion", e.target.value);
                            }}
                            onBlur={() =>
                              handleSave("direccion", userInfo.direccion)
                            } // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.direccion} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("direccion")}
                        >
                          <CommentIcon />
                        </IconButton>
                      </ListItem>

                      <Divider />
                      <ListItem>
                        <ListItemText primary="telefono: " />
                        {editing.telefono ? (
                          <TextField
                            sx={{ width: "70%" }}
                            value={userInfo.telefono}
                            onChange={(e) => {
                              if (!editing.telefono) return; // Solo llama a handleSave si el campo no está siendo editado
                              handleSave("telefono", e.target.value);
                            }}
                            onBlur={() =>
                              handleSave("telefono", userInfo.telefono)
                            } // Guarda el valor al perder el foco
                          />
                        ) : (
                          <ListItemText primary={userInfo.telefono} />
                        )}
                        <IconButton
                          edge="end"
                          aria-label="comments"
                          onClick={() => handleEdit("telefono")}
                        >
                          <CommentIcon />
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
                  Guardar Cambios
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPerfil;
