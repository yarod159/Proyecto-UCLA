import axios from "axios";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css"
const StyledButton = styled(Button)({
  margin: "10px",
});

export default function InformacionGeneral() {
  const [logo, setLogo] = useState(null);
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

  const handleFileChange = (event) => {
    setLogo(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData, logo);
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
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Nombre de la Empresa"
                    name="companyName"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Rif de la empresa"
                    name="rif"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Numero de Telefono"
                    name="Numero de Telefono"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />{" "}
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                  id="outlined-multiline-static"
                    label="Ubicacion"
                    name="Ubicacion"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    multiline
                    
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Correo electronico "
                    name="Correo electronico"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Link de Facebook "
                    name="Link de Facebook"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Link de Instagram "
                    name="Link de Instagram "
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    type="file"
                    onChange={handleFileChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  
                  <button className="addProductButton" type="submit">
                    Guardar
                  </button>
                </Grid>
                
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}
