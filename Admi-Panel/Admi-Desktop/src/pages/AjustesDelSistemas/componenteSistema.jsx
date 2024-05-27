import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  Grid,
  FormControl,
<<<<<<< HEAD
  FormControlLabel,
=======
>>>>>>> web-Hector
  InputLabel,
  Switch,
} from "@mui/material";
import { styled } from "@mui/system";
<<<<<<< HEAD
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css";

const StyledButton = styled(Button)({
  margin: "10px",
});

// Crear un nuevo componente StyledTypography con margen aplicado
const StyledTypography = styled(Typography)({
  marginRight: '80px', // Ajusta este valor según sea necesario
});

export default function ComponenteSistema() {
  const [logo, setLogo] = useState(null);
  const [formData, setFormData] = useState({
    installation: false,
    products: false,
    maintenance: false,
    repair: false,
  });

  const handleSwitchChange = (event, switchName) => {
    setFormData({...formData, [switchName]: event.target.checked });
  };

  const handleFileChange = (event) => {
    setLogo(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData, logo);
  };

=======

const StyledButton = styled(Button)({
  margin: "10px",
});

export default function ComponenteSistema() {
  const [formData, setFormData] = useState({
    installation: false, // Estado para Instalación
    products: false, // Estado para Productos
    maintenance: false, // Estado para Mantenimiento
    repair: false, // Estado para Reparación
  });

  const handleSwitchChange = (event, switchName) => {
    setFormData({ ...formData, [switchName]: event.target.checked });
  };

>>>>>>> web-Hector
  return (
    <div>
      <div>
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">Componentes de Sistema</h1>

<<<<<<< HEAD
          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.installation}
                        onChange={(event) => handleSwitchChange(event, 'installation')}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                    label={
                      <StyledTypography variant="h5" color="textSecondary" style={{ maxWidth: '100px', whiteSpace: 'nowrap' }}>
                        Instalación
                      </StyledTypography>
                    }
                    labelPlacement="start"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.products}
                        onChange={(event) => handleSwitchChange(event, 'products')}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                    label={
                      <StyledTypography variant="h5" color="textSecondary" style={{ maxWidth: '100px', whiteSpace: 'nowrap' }}>
                        Productos
                      </StyledTypography>
                    }
                    labelPlacement="start"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.maintenance}
                        onChange={(event) => handleSwitchChange(event, 'maintenance')}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                    label={
                      <StyledTypography variant="h5" color="textSecondary" style={{ maxWidth: '100px', whiteSpace: 'nowrap' }}>
                        Mantenimiento
                      </StyledTypography>
                    }
                    labelPlacement="start"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.repair}
                        onChange={(event) => handleSwitchChange(event, 'repair')}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                    label={
                      <StyledTypography variant="h5" color="textSecondary" style={{ maxWidth: '100px', whiteSpace: 'nowrap' }}>
                        Reparación
                      </StyledTypography>
                    }
                    labelPlacement="start"
=======
          <form>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } , boxShadow: 2 , borderRadius:"15px"}}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h6">Instalación</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Switch
                    checked={formData.installation}
                    onChange={(event) => handleSwitchChange(event, 'installation')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />

                    {/* Botón que se muestra u oculta según el estado del switch */}
                    {formData.installation && (
                      <Button variant="contained" color="primary">
                        Mostrar Botón de instalaciones
                      </Button>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h6">Productos</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Switch
                    checked={formData.products}
                    onChange={(event) => handleSwitchChange(event, 'products')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h6">Mantenimiento</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Switch
                    checked={formData.maintenance}
                    onChange={(event) => handleSwitchChange(event, 'maintenance')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h6">Reparación</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Switch
                    checked={formData.repair}
                    onChange={(event) => handleSwitchChange(event, 'repair')}
                    inputProps={{ 'aria-label': 'controlled' }}
>>>>>>> web-Hector
                  />
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> web-Hector
