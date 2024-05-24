import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  margin: "10px",
});

export default function Ajustes() {
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/instalador/get-instalacion");
        const data = response.data;

        setNumeroTelefono(data.numeroTelefono);
        setNombreEmpresa(data.nombreEmpresa);
        setMision(data.mision);
        setVision(data.vision);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const instalacionData = {
      numeroTelefono,
      nombreEmpresa,
      mision,
      vision,
    };

    try {
      await axios
        .put("http://localhost:3000/instalador/update-instalacion", instalacionData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error.response.data);
        });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const handleColorChange = (event) => {
    setTheme(
      createTheme({
        palette: {
          primary: {
            main: event.target.value, // New primary color
          },
          secondary: {
            main: theme.palette.secondary.main, // Keep secondary color the same
          },
        },
      })
    );
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
      <div>
        <div className="newProduct">
          <h2 style={{ color: "#18a0a6" }}>Ajustes del Sistema</h2>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Titulo"
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                
                <TextField
                  label="Eslogan"
                  value={mision}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setMision(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Titulo - Sobre Nosotros "
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Sobre Nosotros"
                  value={mision}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setMision(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mision"
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Vision"
                  value={mision}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setMision(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="facebook"
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Instagram"
                  value={mision}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setMision(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="correo"
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="telefono"
                  value={mision}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setMision(e.target.value)}
                />
              </Grid>
          
            </Grid>
         
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
            <button className="addProductButton" type="submit">
              Guardar{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}