import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import axios from 'axios';

function Faq() {
 const [faqs, setFaqs] = useState([]);

 useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/instalador/get-faq');
        if (response.data.success) {
          setFaqs(response.data.data);
        } else {
          console.error('Error al obtener las preguntas frecuentes');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchFaqs();
 }, []);

 return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: 'auto', paddingTop: 10 }}>
      <Typography variant="h4" gutterBottom align="center">
        Preguntas Frecuentes
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={faq._id} sx={{ mb: 2, marginBottom: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.PreguntaFaq}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.RespuestaFaq}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
 );
}

export default Faq;
