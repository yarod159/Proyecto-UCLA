import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logos/logo2.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#03bb85' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box
            component="img"
            src={Logo}
            sx={{ height:   64, marginRight:   2 }} // Ajusta el estilo según necesites
            alt="Logo de Kinetika"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow:   1 }}>
          
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => navigate('/nosotros')}>
            Nosotros
          </Button>
          <Button color="inherit" onClick={() => navigate('/productos')}>
            Productos
          </Button>
          <Button color="inherit" onClick={() => navigate('/servicios')}>
            Servicios
          </Button>
          <Button
            variant="contained"
            color="inherit"
            sx={{ backgroundColor: 'white', color: 'black',  mr:  2 }}
            onClick={() => navigate('/registrarse')}
          >
            Registrarse
          </Button>
          <Button
            variant="contained"
            color="inherit"
            sx={{ backgroundColor: 'white', color: 'black',  mr:  5 }}
            onClick={() => navigate('/iniciar-sesion')}
          >
            Iniciar sesión
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
