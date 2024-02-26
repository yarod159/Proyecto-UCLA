import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import Navbar from '../../components/responsiveAppBar/ResponsiveAppBar';
import Footer from '../../components/footer/Footer';

function Register() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cedula, setCedula] = useState('');
  const [direccion, setDireccion] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefonoPrincipal, setTelefonoPrincipal] = useState(''); // Nuevo estado para teléfono principal
  const [telefonoAlternativo, setTelefonoAlternativo] = useState(''); // Nuevo estado para teléfono alternativo

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, apellidos, email, password, cedula, direccion, fechaNacimiento, telefonoPrincipal, telefonoAlternativo });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            boxShadow:   3,
            p:   2,
            borderRadius:   1,
            marginTop:   2,
            marginBottom:   2,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{
            color: 'primary.main',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '14px   0',
            fontFamily: 'calibri',
          }}>
            Datos Básicos
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="10px"
                label="Nombre"
                variant="standard"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="10px"
                label="Apellidos"
                variant="standard"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="10px"
                label="Cédula de Identidad"
                variant="standard"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="10px"
                label="Fecha de Nacimiento"
                variant="standard"
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            margin="10px"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="10px"
            label="Dirección"
            variant="standard"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="10px"
                label="Teléfono Principal"
                variant="standard"
                value={telefonoPrincipal}
                onChange={(e) => setTelefonoPrincipal(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="10px"
                label="Teléfono Alternativo"
                variant="standard"
                value={telefonoAlternativo}
                onChange={(e) => setTelefonoAlternativo(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            margin="10px"
            label="Contraseña"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="10px"
            label="Confirmar Contraseña"
            variant="standard"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ width:   150, margin: "10px" }}>
            Registrarse
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
