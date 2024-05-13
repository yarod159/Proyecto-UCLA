import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../assets/Logos/logo1-hor-blanco.png";

function Navbar() {
 const navigate = useNavigate();
 const [anchorEl, setAnchorEl] = React.useState(null);

 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
    setAnchorEl(null);
 };

 return (
    <AppBar position="sticky" sx={{ bgcolor: '#15297c' }}>
      <Container maxWidth="lg">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <Box
            component="img"
            src={Logo}
            sx={{ height: '50px', maxWidth: '200px',}}
            alt="Logo"
          />
          </Typography>


        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
            component="img"
            src={Logo}
            sx={{ height: '50px', maxWidth: '200px',}}
            alt="Logo"
          />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Aquí puedes agregar el título de tu sitio */}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
            <Button color="inherit" onClick={() => navigate('/pagos')}>
              Pagos
            </Button>
            <Button color="inherit" onClick={() => navigate('/UserHome')}>
              Iniciar sesión
            </Button>
            <Button color="inherit" onClick={() => navigate('/registrarse')}>
              Registrarse
            </Button>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => { navigate('/'); handleClose(); }}>Inicio</MenuItem>
              <MenuItem onClick={() => { navigate('/nosotros'); handleClose(); }}>Nosotros</MenuItem>
              <MenuItem onClick={() => { navigate('/productos'); handleClose(); }}>Productos</MenuItem>
              <MenuItem onClick={() => { navigate('/servicios'); handleClose(); }}>Servicios</MenuItem>
              <MenuItem onClick={() => { navigate('/pagos'); handleClose(); }}>Pagos</MenuItem>
              <MenuItem onClick={() => { navigate('/registrarse'); handleClose(); }}>Registrarse</MenuItem>
              <MenuItem onClick={() => { navigate('/factura'); handleClose(); }}>Iniciar sesión</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 );
}

export default Navbar;
