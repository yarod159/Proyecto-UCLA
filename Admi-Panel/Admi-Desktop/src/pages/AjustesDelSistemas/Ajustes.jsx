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
import {getAjustesSistemaRequest, putAjustesSistemaRequest} from "../../api/ajusSistema";



const StyledButton = styled(Button)({
  margin: "10px",
});

export default function Ajustes() {
  
  const [numeroTelefono, setNumeroTelefono] = useState("");
  {/*const [selectedFile, setSelectedFile] = useState(null);*/}
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [titulo, setTitulo] = useState("");
  const [eslogan, setEslogan] = useState("");
  const [nTitulo, setNTitulo] = useState("");
  const [nosotros, setNosotros] = useState("");
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [id, setId] = useState("");
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAjustesSistemaRequest(); // Utiliza la función específica aquí
        console.log('aqui,',response)
        if (response.data.success) {
          const data = response.data.data;
          setId(data[0]._id)
          setTitulo(data[0].titulo)
          setNTitulo(data[0].nTitulo);
          setNosotros(data[0].nosotros);
          setMision(data[0].mision);
          setVision(data[0].vision);
          setEslogan(data[0].eslogan);
          setNumeroTelefono(data[0].numeroTelefono)

        } else {
          console.error("Error al obtener los ajusts del sistema:", response.data.message);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Asumiendo que tienes variables de estado para cada uno de los campos de instalación
    const instalacionData = {
      titulo,
      eslogan,
      nTitulo,
      nosotros,
      numeroTelefono,
      nombreEmpresa,
      mision,
      vision,
    };
  
    try {
      // Realiza la petición PUT para actualizar los datos de instalación
      const response = await putAjustesSistemaRequest(instalacionData, id);
  
      console.log('Por aca',response.data); // Imprime la respuesta de la petición
  
      // Aquí puedes manejar la respuesta exitosa, por ejemplo, actualizar el estado local de tu componente
      // con los datos actualizados recibidos de la respuesta, si es necesario
  
    } catch (error) {
      console.error("Error al enviar la solicitud:", error.response? error.response.data : error.message);
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
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                
                <TextField
                  label="Eslogan"
                  value={eslogan}
                  fullWidth
                  margin="normal"
                  placeholder={eslogan}
                  onChange={(e) => setEslogan(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Titulo - Sobre Nosotros "
                  value={nTitulo}
                  onChange={(e) => setNTitulo(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Sobre Nosotros"
                  value={nosotros}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setNosotros(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mision"
                  value={mision}
                  onChange={(e) => setMision(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Vision"
                  value={vision}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setVision(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="facebook"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Instagram"
                  value={instagram}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setInstagram(e.target.value)}
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
                  value={numeroTelefono}
                  fullWidth
                  margin="normal"
                  onChange={(e) => setNumeroTelefono(e.target.value)}
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