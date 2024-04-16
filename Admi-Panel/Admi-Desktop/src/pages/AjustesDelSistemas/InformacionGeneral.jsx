import axios from "axios";
import React, { useState } from "react";
import { TextField, Button, Box, Grid, Alert } from "@mui/material";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css";

export default function InformacionGeneral() {
 const [formData, setFormData] = useState({
    nombreEmpresa: "",
    rifEmpresa: "",
    telefono: "",
    ubicacion: "",
    correo: "",
    linkFacebook: "",
    linkInstagram: "",
 });
 const [submittedData, setSubmittedData] = useState(null);
 const [message, setMessage] = useState("");
 const [messageType, setMessageType] = useState("");

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:3000/informacionGeneral/post-infoGeneral", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setMessage("Datos guardados con éxito");
        setMessageType("success");
        setSubmittedData(formData);
        setFormData({
          nombreEmpresa: "",
          rifEmpresa: "",
          telefono: "",
          ubicacion: "",
          correo: "",
          linkFacebook: "",
          linkInstagram: "",
        });
      }
    } catch (error) {
      setMessage("Error al guardar los datos");
      setMessageType("error");
    }
 };

 return (
    <div>
      <div className="container">
        <SidebarMui />
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">Información General</h1>
          {message && (
            <Alert severity={messageType} onClose={() => setMessage("")}>
              {message}
            </Alert>
          )}
          {submittedData ? (
            <div>
              <p>Nombre de la Empresa: {submittedData.nombreEmpresa}</p>
              <p>Rif de la Empresa: {submittedData.rifEmpresa}</p>
              <p>Teléfono: {submittedData.telefono}</p>
              <p>Ubicación: {submittedData.ubicacion}</p>
              <p>Correo Electrónico: {submittedData.correo}</p>
              <p>Link de Facebook: {submittedData.linkFacebook}</p>
              <p>Link de Instagram: {submittedData.linkInstagram}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                 <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Nombre de la Empresa"
                      name="nombreEmpresa"
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                    />
                 </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Rif de la Empresa"
                      name="rifEmpresa"
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                    />
                 </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Teléfono"
                      name="telefono"
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                    />
                 </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Ubicación"
                      name="ubicacion"
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                    />
                 </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Correo Electrónico"
                      name="correo"
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                    />
                 </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Link de Facebook"
                      name="linkFacebook"
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                    />
                 </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      label="Link de Instagram"
                      name="linkInstagram"
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                    />
                 </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                    <button className="addProductButton" type="submit">
                      Guardar
                    </button>
                 </Grid>
                </Grid>
              </Box>
            </form>
          )}
        </div>
      </div>
    </div>
 );
}
