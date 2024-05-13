import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Faq({ showDeleteButton }) {
 const [faqs, setFaqs] = useState([]);
 const [activeFaq, setActiveFaq] = useState(null);


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

useEffect(() => {
  fetchFaqs();
}, []);

const handleDelete = async (faqId) => {
 try {
    // Realizar la solicitud DELETE a tu API
    await axios.delete(`http://localhost:3000/instalador/delete-faq/${faqId}`);
    // Actualizar el estado de las FAQs para reflejar la eliminación
    setFaqs(faqs.filter(faq => faq._id !== faqId));
    console.log('FAQ eliminada exitosamente');
 } catch (error) {
    console.error('Error al intentar eliminar la FAQ:', error);
 }
};

const handleAccordionClick = (faqId) => {
  setActiveFaq(faqId);
};

 return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center" style={{color:"#18a0a6", fontWeight:"bold", fontSize:"25px", paddingBottom:"60px"}}>
        Preguntas Frecuentes
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={faq._id} sx={{ mb: 2, marginBottom: 2 ,}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.PreguntaFaq}</Typography>
            {showDeleteButton && (
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(faq._id)}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={activeFaq === faq._id ? { color: '#18a0a6' } : { color: '#18a0a6' }}>
              {faq.RespuestaFaq}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
 );
}

export default Faq;
