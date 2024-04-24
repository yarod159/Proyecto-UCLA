import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import {
 TextField,
 Button,
 Box,
 Grid,
 Snackbar,
 Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css";

const StyledButton = styled(Button)({
 margin: "10px",
});

export default function InformacionGeneral() {
 const [formData, setFormData] = useState({
    nombreEmpresa: "",
    rifEmpresa: "",
    telefono: "",
    correo: "",
    ubicacion: "",
    linkFacebook: "",
    linkInstagram: "",
 });

 const [errors, setErrors] = useState({});
 const [open, setOpen] = useState(false);
 const [message, setMessage] = useState('');
 const [severity, setSeverity] = useState('success');

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar si todos los campos están llenos
    const newErrors = {};
    for (const key in formData) {
       if (!formData[key]) {
         newErrors[key] = 'Este campo es requerido';
       }
    }

    // Si hay errores, actualizar el estado y no enviar los datos
    if (Object.keys(newErrors).length > 0) {
       setErrors(newErrors);
       return; // No enviar los datos
    }

    // Si no hay errores, proceder con el envío de los datos
    try {
      const response = await axios.post("http://localhost:3000/informacionGeneral/post-infoGeneral", formData);
      console.log('Form data submitted successfully:', response.data);
      setMessage('Datos guardados con éxito');
      setSeverity('success');
      setOpen(true);
      setErrors({}); // Limpiar los errores después de un envío exitoso
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setMessage('Error al guardar los datos');
      setSeverity('error');
      setOpen(true);
    }
 };

 const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
 };

 return (
    <div>
      <div className="container">
        <SidebarMui />
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">Información General</h1>

          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Nombre de la Empresa"
                    name="nombreEmpresa"
                    value={formData.nombreEmpresa}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.nombreEmpresa}
                    helperText={errors.nombreEmpresa}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Rif de la empresa"
                    name="rifEmpresa"
                    value={formData.rifEmpresa}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.rifEmpresa}
                    helperText={errors.rifEmpresa}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Numero de Telefono"
                    name="telefono"
                    value={formData.telefono}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.telefono}
                    helperText={errors.telefono}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Ubicacion"
                    name="ubicacion"
                    value={formData.ubicacion}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    multiline
                    error={!!errors.ubicacion}
                    helperText={errors.ubicacion}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Correo electronico"
                    name="correo"
                    value={formData.correo}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.correo}
                    helperText={errors.correo}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Link de Facebook"
                    name="linkFacebook"
                    value={formData.linkFacebook}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.linkFacebook}
                    helperText={errors.linkFacebook}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Link de Instagram"
                    name="linkInstagram"
                    value={formData.linkInstagram}
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    error={!!errors.linkInstagram}
                    helperText={errors.linkInstagram}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <StyledButton type="submit">Guardar</StyledButton>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <Link to="/InformacionGeneralList">
                   <StyledButton variant="contained" component="span">
                     Consultar Información General
                   </StyledButton>
                 </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
 );
}
