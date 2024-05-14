import { Button, Container, Grid, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import miImagen from '../../../../assets/background/mircro.jpg';
import miImagenDos from '../../../../assets/background/micro2.jpg';
import ImgFibra from '../../../../assets/background/tipos-fibra-optica-internet.jpg';
import './presentacion.css'
const IMAGE_INTERVAL = 4000; // Intervalo de tiempo para cambiar la imagen automáticamente

function Presentacion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: miImagen, interval: IMAGE_INTERVAL },
    { src: miImagenDos, interval: IMAGE_INTERVAL },
    { src: ImgFibra, interval: IMAGE_INTERVAL }
  ];

  // Función para cambiar la imagen automáticamente
  const changeImageAutomatically = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Efecto para iniciar el cambio de imagen automáticamente
  useEffect(() => {
    const timer = setTimeout(changeImageAutomatically, IMAGE_INTERVAL);
    return () => clearTimeout(timer); // Limpiar el timeout al desmontar el componente
  }, [currentIndex]);

  return (
    <Container>
      <img
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          position: 'relative',
          top: '-80px',
          left: '49%',
          transform: 'translateX(-50%) scale(1)',
          transition: 'transform 0.5s ease-in-out',
        }}
        src={images[currentIndex].src}
        alt={`Imagen ${currentIndex + 1}`}
      />
      <div
        style={{
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex:"2",
         
 
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" component="div" gutterBottom style={{ fontSize: '1rem' }}>
              BIENVENIDOS
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" component="div" gutterBottom className='presentacion-title-font'>
              Servicio Técnico en Telefonía a Proveedores de Telecomunicaciones
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="div" gutterBottom className='presentacion-descripcion'>
              Líderes en suministro de equipamiento y soluciones integrales de telecomunicaciones, adaptadas a tus necesidades de negocio y tecnología desde hace más de 15 años.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" style={{ fontSize: '16px',width:"200px", marginTop:"40px",fontWeight:"bold" ,borderRadius:"20px" ,  background: 'linear-gradient(336deg, rgba(24,160,166,1) 23%, rgba(255,255,255,1) 100%)'  }}>
              VER SERVICIOS
            </Button>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(4, 24, 39, 0.75)',
          zIndex: 1
        }}
      />
    </Container>
  );
}

export default Presentacion;