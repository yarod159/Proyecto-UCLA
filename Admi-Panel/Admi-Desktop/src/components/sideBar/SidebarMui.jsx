import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SidebarMui() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#18a0a6" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Kinetika Admi
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}
            >
              <ListItemIcon>
                <LineStyleIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link
            to="/analitica"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <TimelineIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary=" Analitica" />
            </ListItem>
          </Link>
          <Link
            to="/analitica"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <TrendingUpIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary=" Ventas" />
            </ListItem>
          </Link>
        </List>

        <Divider />
        <List>
          <h3
            style={{ position: "relative", right: "-70px", paddingTop: "15px" }}
            className="sidebarTitle"
          >
            Menu rapido
          </h3>
          <Link
            to="/users"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <PermIdentityIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary=" Usuarios" />
            </ListItem>
          </Link>

          <Link
            to="/empleados"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <PermIdentityIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Empleados" />
            </ListItem>
          </Link>

          <Link
            to="/products"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <StorefrontIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Productos" />
            </ListItem>
          </Link>

          <Link
            to="/transacciones"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <AttachMoneyIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Transacciones" />
            </ListItem>
          </Link>

          <Link
            to="/reportes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <BarChartIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Reportes" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <h3
            style={{ position: "relative", right: "-70px", paddingTop: "15px" }}
            className="sidebarTitle"
          >
            Gestión de Servicios
          </h3>
          <Link
            to="/solicitudes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <MailOutlineIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary=" Solicitudes" />
            </ListItem>
          </Link>

          <Link
            to="/atencion-cliente"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <PermIdentityIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary=" Atencion al Cliente" />
            </ListItem>
          </Link>

          <Link
            to="/control-pago"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <PaidIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary=" Control de Pagos" />
            </ListItem>
          </Link>

          <Link
            to="/calificaciones"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <StarHalfIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Calificaciones" />
            </ListItem>
          </Link>

          <Link
            to="/promociones"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <ConfirmationNumberIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary=" Promociones" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <h3
            style={{ position: "relative", right: "-70px", paddingTop: "15px" }}
            className="sidebarTitle"
          >
            Personal
          </h3>
          <Link
            to="/administrar"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <WorkOutlineIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Administrar" />
            </ListItem>
          </Link>

          <Link
            to="/analitica1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon >
                <TimelineIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Analitica" />
            </ListItem>
          </Link>

          <Link
            to="/informe"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon >
                <ReportIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Informe" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <h3
            style={{ position: "relative", right: "-70px", paddingTop: "15px" }}
            className="sidebarTitle"
          >
            Configuracion
          </h3>
          <Link
            to="/ajustes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <SettingsIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Ajustes del Sistemas" />
            </ListItem>
          </Link>
          <Link
            to="/instalacion"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <SettingsIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="instalacion" />
            </ListItem>
          </Link>

          <Link
            to="/InformacionGeneral"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <SettingsIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Informacion General" />
            </ListItem>
          </Link>
          <Link
            to="/InformacionEmpresa"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <SettingsIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Informacion Empresa" />
            </ListItem>
          </Link>
          <Link
            to="/MetodosPago"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Cambia el color de fondo al pasar el cursor
                  ".MuiListItemIcon-root": {
                    color: "#129b7d", // Cambia el color del ícono al pasar el cursor
                  },
                  ".MuiListItemText-primary": {
                    color: "#129b7d", // Cambia el color del texto al pasar el cursor
                  },
                },
              }}>
              <ListItemIcon>
                <SettingsIcon className="sidebarIcon" />
              </ListItemIcon>
              <ListItemText primary="Metodos de Pago" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
