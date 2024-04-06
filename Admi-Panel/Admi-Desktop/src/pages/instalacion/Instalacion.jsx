import Sidebar from "../../components/sideBar/SideBar";
import Topbar from "../../components/topBar/TopBar";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Autocomplete from "@mui/material/Autocomplete";

import "./instalacion.css";
import SidebarMui from "../../components/sideBar/SidebarMui";

import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importa los estilos de Quill

const data = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function Instalacion() {
  const [openSection1, setOpenSection1] = React.useState(false);
  const [openSection2, setOpenSection2] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [valueTelefono, setValueTelefono] = React.useState([]);

  const handleChange = (event, newValue) => {
    if (newValue) {
      // Check if newValue is an array
      if (Array.isArray(newValue)) {
        setValueTelefono([...newValue]); // Update state with a new array
      } else {
        console.error("Invalid newValue format. Expected an array.");
      }
    }
  };
  return (
    <div>
      <div className="container">
        <SidebarMui />
        <div className="container-instalacion">
          <div className="instalacion-wrapper">
            <Box sx={{ width: 1200, margin: "15px 15px" }}>
              <ThemeProvider
                theme={createTheme({
                  components: {
                    MuiListItemButton: {
                      defaultProps: {
                        disableTouchRipple: true,
                      },
                    },
                  },
                  palette: {
                    mode: "light",
                    primary: { main: "#000" },
                    background: { paper: "#fff" },
                  },
                })}
              >
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <FireNav component="nav" disablePadding>
                      <ListItemButton component="a" href="#customized-list">
                        <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                        <ListItemText
                          sx={{ my: 0 }}
                          primary="Instalacion del Sistema"
                          primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: "medium",
                            letterSpacing: 0,
                          }}
                        />
                      </ListItemButton>
                      <Divider />

                      <Divider />
                      <Box
                        sx={{
                          bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                          pb: open ? 2 : 0,
                        }}
                      >
                        <ListItemButton
                          alignItems="flex-start"
                          onClick={() => setOpenSection1(!openSection1)}
                          sx={{
                            px: 3,
                            pt: 2.5,
                            pb: openSection1 ? 0 : 2.5,
                            "&:hover, &:focus": {
                              "& svg": { opacity: openSection1 ? 1 : 0 },
                            },
                          }}
                        >
                          <ListItemText
                            primary="Pagina principal"
                            primaryTypographyProps={{
                              fontSize: 15,
                              fontWeight: "medium",
                              lineHeight: "20px",
                              mb: "2px",
                            }}
                            secondary="Logo, Footer, numero de telefonos, redes sociales , mision y vision"
                            secondaryTypographyProps={{
                              noWrap: true,
                              fontSize: 12,
                              lineHeight: "16px",
                              color: open ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)",
                            }}
                            sx={{ my: 0 }}
                          />
                          <KeyboardArrowDown
                            sx={{
                              mr: -1,
                              opacity: 0,
                              transform: open ? "rotate(-180deg)" : "rotate(0)",
                              transition: "0.2s",
                            }}
                          />
                        </ListItemButton>
                        {openSection1 && (
                          <>
                            <TextField
                              label="Nombre de la empresa"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "90%", marginLeft: 5 }}
                            />

                            <TextField
                              label="Footer"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "90%", marginLeft: 5 }}
                            />
                              <Grid container spacing={2}   sx={{ marginLeft: 0, paddingTop:2 }}>
                            <Autocomplete
                              multiple
                              freeSolo
                              id="multiple-limit-tags"
                              options={numeroTelefono}
                              getOptionLabel={(option) => option.title}
                              value={valueTelefono}
                              onChange={(event, newValue) => {
                                // Verifica si newValue es distinto de null o undefined
                                if (newValue) {
                                  setValueTelefono([...newValue]);
                                  console.log(newValue);
                                }
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Numero de telefono"
                                  placeholder="Favorites"
                                />
                              )}
                              sx={{ mt: 1, width: "40%", marginLeft: 5, paddingTop:2 }}
                            />

<Autocomplete
                              multiple
                              freeSolo
                              id="multiple-limit-tags"
                              options={numeroTelefono}
                              getOptionLabel={(option) => option.title}
                              value={valueTelefono}
                              onChange={(event, newValue) => {
                                // Verifica si newValue es distinto de null o undefined
                                if (newValue) {
                                  setValueTelefono([...newValue]);
                                  console.log(newValue);
                                }
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Redes Sociales"
                                  placeholder="Favorites"
                                />
                              )}
                              sx={{ mt: 1, width: "40%", marginLeft: 5, paddingTop:2 }}
                            />
                            </Grid>

                            <h3
                              style={{
                                fontSize: "12px",
                                paddingLeft: "22px",
                                paddingBottom: "10px",
                                paddingTop: "20px",
                              }}
                            >
                              {" "}
                              Mision{" "}
                            </h3>
                            <QuillEditor style={{marginLeft:'40px', marginRight:'40px'}}
                              theme="snow"
                              value={value}
                              onChange={(content) => setValue(content)}
                            />
                            <h3
                              style={{
                                fontSize: "12px",
                                paddingLeft: "22px",
                                paddingBottom: "10px",
                                paddingTop: "20px",
                              }}
                            >
                              {" "}
                              Vision{" "}
                            </h3>
                            <QuillEditor style={{marginLeft:'40px', marginRight:'40px'}}
                              theme="snow"
                              value={value}
                              onChange={(content) => setValue(content)}
                            />
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="raised-button-file"
                              multiple
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Button variant="contained" component="span"  style={{marginLeft:'40px', marginRight:'40px', marginTop:'15px'}}>
                                Upload Image
                              </Button>
                            </label>
                          </>
                        )}
                      </Box>

                      <Divider />

                      <Divider />

                      <Box
                        sx={{
                          bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                          pb: open ? 2 : 0,
                        }}
                      >
                        <ListItemButton
                          alignItems="flex-start"
                          onClick={() => setOpenSection2(!openSection2)}
                          sx={{
                            px: 3,
                            pt: 2.5,
                            pb: openSection2 ? 0 : 2.5,
                            "&:hover, &:focus": {
                              "& svg": { opacity: openSection2 ? 1 : 0 },
                            },
                          }}
                        >
                          <ListItemText
                            primary="Productos"
                            primaryTypographyProps={{
                              fontSize: 15,
                              fontWeight: "medium",
                              lineHeight: "20px",
                              mb: "2px",
                              color: "#000",
                            }}
                            secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                            secondaryTypographyProps={{
                              noWrap: true,
                              fontSize: 12,
                              lineHeight: "16px",
                              color: open
                                ? "rgba(0,0,0,0)"
                                : "rgba(255,255,255,0.5)",
                            }}
                            sx={{ my: 0 }}
                          />
                          <KeyboardArrowDown
                            sx={{
                              mr: -1,
                              opacity: 0,
                              transform: open ? "rotate(-180deg)" : "rotate(0)",
                              transition: "0.2s",
                            }}
                          />
                        </ListItemButton>
                        {openSection2 && (
                          <>
                            <TextField
                              label="Logo"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "100%" }}
                            />
                            <TextField
                              label="Footer"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "100%" }}
                            />
                            <TextField
                              label="Numero de telefonos"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "100%" }}
                            />
                            <TextField
                              label="Redes sociales"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "100%" }}
                            />
                            <TextField
                              label="Mision"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "100%" }}
                            />
                            <TextField
                              label="Vision"
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, width: "100%" }}
                            />
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="raised-button-file"
                              multiple
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Button variant="contained" component="span">
                                Upload Image
                              </Button>
                            </label>
                          </>
                        )}
                      </Box>
                    </FireNav>
                  </Paper>
                </Grid>
              </ThemeProvider>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

const numeroTelefono = [
  { title: "0424-55531258" },
  { title: "0412-456987" },
  { title: "014-1234567" },
  { title: "0251-1234657" },
];
