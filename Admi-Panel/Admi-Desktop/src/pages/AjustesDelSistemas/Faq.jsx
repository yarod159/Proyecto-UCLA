import axios from "axios";
import React, { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import SidebarMui from "../../components/sideBar/SidebarMui";
import "./informacionGeneral.css";
import FaqWeb from "../../../../../portal-web/src/pages/Home/components/FAQ/Faq";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Modal from "@mui/material/Modal";


const isDesktopAdminPanel = true;

export default function Faq() {
  const [PreguntaFaq, setPreguntaFaq] = useState("");
  const [RespuestaFaq, setRespuestaFaq] = useState("");
  const [faqs, setFaqs] = useState([]); // State to hold all FAQs
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!PreguntaFaq.trim() ||!RespuestaFaq.trim()) {
      alert("Por favor, llene todos los campos.");
      return; 
    }
    const faqData = {
      PreguntaFaq,
      RespuestaFaq,
    };

    try {
      await axios
        .post("http://localhost:3000/instalador/post-faq", faqData)
        .then((response) => {
          console.log(response.data);
          setPreguntaFaq("");
          setRespuestaFaq("");
          setOpen(true);
         
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error.response.data);
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
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese la pregunta."
                    name="preg"
                    fullWidth
                    value={PreguntaFaq}
                    margin="normal"
                    onChange={(e) => setPreguntaFaq(e.target.value)}
                    sx={{
                      fontWeight: 'bold', // Aumenta el peso de la fuente aquí
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Por favor ingrese la respuesta de la pregunta."
                    name="resp"
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={4}
                    value={RespuestaFaq}
                    onChange={(e) => setRespuestaFaq(e.target.value)}
                    sx={{
                      fontWeight: 'bold', // Aumenta el peso de la fuente aquí
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <button className="addProductButton" type="submit">
                    Guardar
                  </button>
                </Grid>
              </Grid>
              <FaqWeb showDeleteButton={isDesktopAdminPanel} />
            </Box>
          </form>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ width: 400, bgcolor: 'background.paper', p: 2, mx: 'auto', my: '20%', borderRadius: 1 }}>
          <h2 id="modal-title">Guardado con éxito</h2>
          <p id="modal-description">La pregunta FAQ ha sido guardada con éxito.</p>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
     
    </div>
  );
}
