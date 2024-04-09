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
    const faqData = {
      PreguntaFaq,
      RespuestaFaq,
    };

    try {
      await axios
        .post("http://localhost:3000/instalador/post-faq", faqData)
        .then((response) => {
          console.log(response.data);
          
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Guardado con éxito</DialogTitle>
        <DialogContent>
          <p>La pregunta FAQ ha sido guardada con éxito.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
