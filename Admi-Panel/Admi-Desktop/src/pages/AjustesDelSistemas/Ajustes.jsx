import Sidebar from "../../components/sideBar/SideBar";
import Topbar from "../../components/topBar/TopBar";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";

// Estilos personalizados para el botón de subida de archivos
const StyledButton = styled(Button)({
  margin: "10px",
});

export default function Ajustes() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [contacto, setContacto] = useState("");
  const [colorCorporativo, setColorCorporativo] = useState("#000000");
  const [selectedFile, setSelectedFile] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleColorChange = (event) => {
     setTheme(createTheme({
       palette: {
         primary: {
           main: event.target.value, // New primary color
         },
         secondary: {
           main: theme.palette.secondary.main, // Keep secondary color the same
         },
       },
     }));
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Por favor, selecciona un archivo antes de subir.");
      return;
    }
    // Aquí puedes implementar la lógica para subir el archivo al servidor
    console.log("Archivo seleccionado:", selectedFile);
  };

  

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1>Ajustes del Sistema</h1>
          <form>
            <TextField
              label="Nombre de la Empresa"
              value={nombreEmpresa}
              onChange={(e) => setNombreEmpresa(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Número de Contacto"
              value={contacto}
              onChange={(e) => setContacto(e.target.value)}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="color-label">Color Corporativo</InputLabel>
              <Select
                labelId="color-label"
                value={theme.palette.primary.main}
                onChange={handleColorChange}
              >
                <MenuItem value="#FF0000">Rojo</MenuItem>
                <MenuItem value="#00FF00">Verde</MenuItem>
                <MenuItem value="#0000FF">Azul</MenuItem>
                <MenuItem value="#FFA500">Naranja</MenuItem>
                {/* Agrega más colores según sea necesario */}
              </Select>
            </FormControl>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="contained-button-file">
              <StyledButton variant="contained" component="span">
                Subir Logotipo Corporativo
              </StyledButton>
            </label>
            <Button variant="contained" onClick={handleUpload}>
              Subir
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
