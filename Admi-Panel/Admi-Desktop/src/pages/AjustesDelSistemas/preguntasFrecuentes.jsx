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

export default function faq() {
  const [logo, setLogo] = useState(null);
  const [errors, setErrors] = useState({});
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
          <h1 className="informacionGeneral-h1">Preguntas Frecuentes</h1>

          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese la pregunta."
                    name="preg"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese la respuesta de la pregunta."
                    name="resp"
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={4}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={12} md={12}>
                  
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