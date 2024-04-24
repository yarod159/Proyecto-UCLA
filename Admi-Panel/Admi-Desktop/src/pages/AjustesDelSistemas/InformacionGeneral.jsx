import axios from "axios";
import React, { useState } from "react";
import {
 TextField,
 Button,
 Box,
 Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css";

const StyledButton = styled(Button)({
 margin: "10px",
});

export default function InformacionGeneral() {
 const [formData, setFormData] = useState({
    companyName: "",
    rif: "",
    mission: "",
    vision: "",
    corporateColor: "",
 });

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (event) => {
    event.preventDefault();

    // Preparar los datos del formulario
    const formData = new FormData();
    Object.keys(formData).forEach((key) => {
      formData.append(key, formData[key]);
    });

    try {
      // Realizar la petición POST con Axios
      const response = await axios.post("http://localhost:3000/informacionGeneral/post-infoGeneral", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Manejar la respuesta
      console.log(response.data);
      // Aquí puedes manejar la respuesta, por ejemplo, mostrando un mensaje de éxito
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error
    }
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
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Rif de la empresa"
                    name="rifEmpresa"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Numero de Telefono"
                    name="telefono"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Ubicacion"
                    name="ubicacion"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    multiline
                 />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                 <TextField
                    label="Correo electronico"
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
                 <StyledButton type="submit">Guardar</StyledButton>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </div>
 );
}
