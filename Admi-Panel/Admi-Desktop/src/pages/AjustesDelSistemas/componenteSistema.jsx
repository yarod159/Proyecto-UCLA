import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Switch,
} from "@mui/material";
import { styled } from "@mui/system";

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

  return (
    <div>
      <div>
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">Componentes de Sistema</h1>

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
                  />
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}