import * as React from 'react';
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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LockIcon from '@mui/icons-material/Lock';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';

const pages = ['Inicio', 'Servicios', 'Atención al Cliente'];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function UserNavbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);


 const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
 };

 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
 };

 const handleCloseUserMenu = () => {
    setAnchorElUser(null);
 };

 const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const theme = useTheme();
 
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <DrawerHeader>
        <Typography variant="h6" noWrap component="div">
          Menú
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
      <ListItem disablePadding>
          <ListItemButton href='/home' sx={{":hover":{bgcolor: '#18a0a6', color:'#fff'}}}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>

            <ListItemText>Inicio</ListItemText>
          </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
<<<<<<< HEAD
          <ListItemButton href='/productos' sx={{":hover":{bgcolor: '#18a0a6', color:'#fff'}}}>
            <ListItemIcon>
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>

            <ListItemText>Productos</ListItemText>
          </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
          <ListItemButton href='/servicios' sx={{":hover":{bgcolor: '#18a0a6', color:'#fff'}}}>
            <ListItemIcon>
              <ElectricalServicesIcon />
=======
          <ListItemButton href='/servicios' sx={{":hover":{bgcolor: '#18a0a6', color:'#fff'}}}>
            <ListItemIcon>
              <InboxIcon />
>>>>>>> web-Hector
            </ListItemIcon>

            <ListItemText>Servicios</ListItemText>
          </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
          <ListItemButton href='/AtencionAlCliente' sx={{":hover":{bgcolor: '#18a0a6', color:'#fff'}}}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <ListItemText>Atención al cleinte</ListItemText>
          </ListItemButton>
      </ListItem>

      

      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href='/UserProfile' sx={{":hover":{bgcolor: '#18a0a6', color:'#fff'}}}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>

            <ListItemText>Perfil</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='/Home' sx={{ ":hover":{bgcolor: '#18a0a6', color:'#fff'}}}>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>

            <ListItemText>Cerrar Sesión</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

 

 return (
    <div>

        <Box sx={{display:'flex'}}>
        <CssBaseline />
        <AppBar position="static" sx={{ bgcolor: '#18a0a6' }} open={open}>
          
          <Container>
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home"
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
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer(true)}
                  edge="start"
                  sx={{ mr: 2, }}
                >
                  <MenuIcon />
                </IconButton>

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
                href="/home"
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
        </Box>

        <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
        </Drawer>
    </div>

 );
}

export default UserNavbar;
