import axios from "axios";
import React, { useState } from "react";
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
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css"
const StyledButton = styled(Button)({
  margin: "10px",
});

export default function faq() {

  const [PreguntaFaq, setPreguntaFaq] = useState("");
  const [RespuestaFaq, setRespuestaFaq] = useState("");
  const [errors, setErrors] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que PreguntaFaq y RespuestaFaq no estén vacíos
  if (!PreguntaFaq.trim() ||!RespuestaFaq.trim()) {
    setErrors({
      PreguntaFaq: PreguntaFaq.trim()? "" : "Este campo no puede estar vacío.",
      RespuestaFaq: RespuestaFaq.trim()? "" : "Este campo no puede estar vacío.",
    });
    return; // Detener la ejecución si hay errores
  }

    const faqData = {
     PreguntaFaq,
     RespuestaFaq
    };

    try {
      await axios
       .post("http://localhost:3000/instalador/post-faq", faqData)
       .then((response) => {
          console.log(response.data);
          setPreguntaFaq("");
          setRespuestaFaq("");

        })
       .catch((error) => {
          console.error("Error al enviar la solicitud:", error.response? error.response.data : error.message);
        });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <SidebarMui />
        <div className="newProduct">
          <h1 className="informacionGeneral-h1">Preguntas Frecuentes</h1>

          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, padding: { xs: 5, sm: 10, md: 10 } }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese la pregunta."
                    name="preg"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPreguntaFaq(e.target.value)}
                    error={!!errors.preg}
                    helperText={errors.preg}
                  />
                </Grid>
                <Grid  item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese la respuesta de la pregunta."
                    name="resp"
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={4}
                    onChange={(e) => setRespuestaFaq(e.target.value)}
                    error={!!errors.resp}
                    helperText={errors.resp}
                  />
                </Grid>
                <Grid  item xs={12} sm={12} md={12}>
                  
                  <button className="addProductButton" type="submit">
                    Guardar
                  </button>
                </Grid>
                
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}