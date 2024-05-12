import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoPrincipal from "../../assets/Logos/logo1-hor-blanco.png";

const pages = ['Inicio', 'Productos', 'Servicios'];

function UserNavbar() {
 const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [anchorElUser, setAnchorElUser] = React.useState(null);

 const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
 };
 const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
 };

 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
 };

 const handleCloseUserMenu = () => {
    setAnchorElUser(null);
 };

 return (
    <AppBar position="static" sx={{ bgcolor: '#18a0a6' }}>
      <Container>
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/inicio"
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
            src={LogoPrincipal}
            sx={{ height: '50px', maxWidth: '200px',}}
            alt="Logo"
          />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/inicio"
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
            src={LogoPrincipal}
            sx={{ height: '50px', maxWidth: '200px',}}
            alt="Logo"
          />
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Button href='/UserProfile'><Typography textAlign="center">Perfil</Typography></Button>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Button href='/Home'><Typography textAlign="center">Cerrar sesión</Typography></Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 );
}

export default UserNavbar;
