import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ bgcolor: '#03bb85' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow:  1 }}>
            Mi Sitio
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => navigate('/productos')}>
            Productos
          </Button>
          <Button color="inherit" onClick={() => navigate('/nosotros')}>
            Nosotros
          </Button>
          <Button color="inherit" onClick={() => navigate('/servicios')}>
            Servicios
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
