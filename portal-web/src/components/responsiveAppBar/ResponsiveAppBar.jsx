import React, { useState, useEffect,useContext } from 'react';
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

import { AuthContext } from '../../context/AuthContext'; // Asegúrate de ajustar la ruta de importación

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

  const { isAuthenticated } = useContext(AuthContext);



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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Productos", path: "/productos" },
    { label: "Servicios", path: "/servicios" },
    { label: "Pagos", path: "/pagos" },
    { label: "Registrarse", path: "/register" },
    { label: "Iniciar sesión", path: "/login" }
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: navbarColor, height: "80px" ,}}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={styles.typography}
          >
            <Box
              component="img"
              src={Logo}
              sx={{ height: "50px", maxWidth: "200px" }}
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
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <Box
              component="img"
              src={Logo}
              sx={{ height: "50px", maxWidth: "200px" }}
              alt="Logo"
            />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Aquí puedes agregar el título de tu sitio */}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex", fontSize: "20px", gap: "1.5rem" } }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                sx={styles.button}
                color="inherit"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "text.secondary" }}
                  >
                    {item.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {isAuthenticated && (
  <>
    <Button
      sx={styles.button}
      color="inherit"
      onClick={() => navigate('/register')}
    >
      Registrarse
    </Button>
    <Button
      sx={styles.button}
      color="inherit"
      onClick={() => navigate('/login')}
    >
      Iniciar sesión
    </Button>
  </>)}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;