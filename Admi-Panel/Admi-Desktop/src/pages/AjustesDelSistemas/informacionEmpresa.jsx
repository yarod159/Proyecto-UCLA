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

export default function InformacionEmpresa() {
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
          <h1 className="informacionGeneral-h1">Información Empresa</h1>

          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Misión"
                    name="mision"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Visión"
                    name="Vision"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />{" "}
                </Grid>
              
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Descripción"
                    name="Descripción"
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
