import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

function Faq() {
 return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: 'auto', paddingTop:10 }}>
      {/* Título "Preguntas Frecuentes" */}
      <Typography variant="h4" gutterBottom  align="center">
        Preguntas Frecuentes
      </Typography>
      
      <Accordion sx={{ mb: 2, marginBottom: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿Cómo abro una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para abrir una cuenta, visita nuestra página de registro y sigue los pasos indicados.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{ mb: 2, marginBottom: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿Cómo abro una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para abrir una cuenta, visita nuestra página de registro y sigue los pasos indicados.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2, marginBottom: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿Cómo abro una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para abrir una cuenta, visita nuestra página de registro y sigue los pasos indicados.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2, marginBottom: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿Cómo abro una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para abrir una cuenta, visita nuestra página de registro y sigue los pasos indicados.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Box>
 );
}

export default Faq;
