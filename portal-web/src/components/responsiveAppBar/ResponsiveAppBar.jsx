import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Logos/logo1-hor-blanco.png";
import { getCompSistemaRequest } from '../../api/ajustesSistema';

import { useAuth } from '../../context/AuthContext';

const styles = {
  button: {
    fontSize: "17px",
    textTransform: "none"
  },
  typography: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none"
  }
};

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [installation, setInstallation] = useState("false");

  const { isAuthenticated, logout, user, setIsAuthenticated, setUser } = useAuth();

  

  console.log('Prueba Navbar:',isAuthenticated, user)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor("#18a0a6");
      } else {
        setNavbarColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {/*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCompSistemaRequest(); // Utiliza la función específica aquí
        console.log('CompSistema,',response)
        if (response.data.success) {
          const data = response.data.data;
          setInstallation(data[0].installation)
        } else {
          console.error("Error al obtener los ajusts del sistema:", response.data.message);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);*/}

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Inicio", path: "/home" },
    { label: "Servicios", path: "/servicios" },
    { label: "Atencion al cliente", path: "/AtencionAlCliente" },
    
    
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: navbarColor, height: "80px" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" noWrap component="a" href="/Home" sx={styles.typography}>
            <Box component="img" src={Logo} sx={{ height: "50px", maxWidth: "200px" }} alt="Logo" />
          </Typography>
          <Typography variant="h5" noWrap component="a" href="/Home" sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1, fontFamily: "monospace", fontWeight: 700, letterSpacing: ".3rem", color: "inherit", textDecoration: "none" }}>
            <Box component="img" src={Logo} sx={{ height: "50px", maxWidth: "200px" }} alt="Logo" />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Aquí puedes agregar el título de tu sitio */}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex", fontSize: "20px", gap: "1.5rem" } }}>
            {menuItems.map((item, index) => (
              <Button key={index} sx={styles.button} color="inherit" onClick={() => navigate(item.path)}>
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleClick} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: "top", horizontal: "right" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={Boolean(anchorEl)} onClose={handleClose}>
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  <Typography textAlign="center" sx={{ color: "text.secondary" }}>
                    {item.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {isAuthenticated? (
            <>
             
              <Button sx={styles.button} color="inherit" onClick={() => navigate('/UserProfile')}>Perfil de Usuario</Button>
              <Button sx={styles.button} color="inherit" onClick={() => logout()}>Cerrar Sesion</Button>
              <Typography>Bienvenido {user.email}</Typography>
            </>
          ) : (
            <>
              <Button sx={styles.button} color="inherit" onClick={() => navigate('/login')}>Iniciar Sesion</Button>
              <Button sx={styles.button} color="inherit" onClick={() => navigate('/register')}>Registrarte</Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
