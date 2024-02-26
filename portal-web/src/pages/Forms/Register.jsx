import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Navbar from '../../components/responsiveAppBar/ResponsiveAppBar';
import Footer from '../../components/footer/Footer';

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cedula, setCedula] = useState(''); // Nuevo estado para la cédula
  const [direccion, setDireccion] = useState(''); // Nuevo estado para la dirección

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el registro, por ejemplo, enviar los datos al servidor
    console.log({ nombre, email, password, cedula, direccion });
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
            width: '80%',
            boxShadow:  3, // Sombra
            p:  2, // Padding
            borderRadius:  1, // Bordes redondeados
            marginTop:  2, // Margen superior
            marginBottom:  2, // Margen inferior
          }}
        >
           <Typography variant="h4" gutterBottom sx={{
      color: 'primary.main', // Cambia el color del texto al color primario del tema
      textAlign: 'center', // Centra el texto horizontalmente
      fontWeight: 'bold', // Hace el texto en negrita
      padding: '16px  0', // Añade un padding vertical para darle más espacio
      fontFamily: 'calibri', 
    }}>
      Registro de Cliente
    </Typography>
          <TextField
            fullWidth
            margin="10px" 
            label="Nombre"
            variant="standard"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
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
            label="Cédula"
            variant="standard"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
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
          <Button type="submit" variant="contained" color="primary" sx={{ width: 150, margin: "10px"   }}>
            Registrarse
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
