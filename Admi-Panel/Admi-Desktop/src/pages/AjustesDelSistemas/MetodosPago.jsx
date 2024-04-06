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

export default function MetodosPago() {
 const [logo, setLogo] = useState(null);
 const [formData, setFormData] = useState({
    companyName: "",
    rif: "",
    mission: "",
    vision: "",
    corporateColor: "",
    banco: "", // Añade el estado para el banco
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
          <h1 className="informacionGeneral-h1">Métodos de Pago</h1>

          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid sx={{marginTop:2}} item xs={12} sm={6} md={6}>
                    <Select
                      id="banco-select"
                      value={formData.banco}
                      label="Banco"
                      name="banco"
                      onChange={handleInputChange}
                      fullWidth
                    >
                      <MenuItem value="">
                        <em>Ninguno</em>
                      </MenuItem>
                      <MenuItem value={10}>Banco 1</MenuItem>
                      <MenuItem value={20}>Banco 2</MenuItem>
                      <MenuItem value={30}>Banco 3</MenuItem>
                    </Select>
                 
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Cedula o Rif"
                    name="rif"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                  <TextField
                    label="Beneficiario"
                    name="Beneficiario"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />{" "}
                </Grid>
                <Grid  item xs={12} sm={6} md={6}>
                <TextField
                    label="Número de Teléfono "
                    name="telefono"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                
                </Grid>
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Numero de Cuenta "
                    name="cuenta"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
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
