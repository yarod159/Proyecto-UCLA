import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ImgNosotros from '../../../../assets/background/nosotros.jpg';
function NosotrosHomeMain() {
  return (
    <Container maxWidth="lg" style={{position:"relative", top:"-200px"}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom style={{color:"#18a0a6", fontSize:"16px"}}>
            NOSOTROS
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom style={{fontSize:"36px", fontWeight:"bold"}}>
            Servicio técnico especializado en telecomunicaciones: ¡Liderando el
            mercado!
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Somos una empresa Venezolana en el área de las Telecomunicaciones,
            iniciamos nuestras operaciones en el año 2008 brindando el mejor
            servicio técnico especializado en sus diferentes tecnologías:
            Satelital, Telefonía, Fibra Óptica, HFC, Microondas, Radio,
            Comunicaciones de Datos y Redes Computo a las principales empresas
            proveedoras de servicios de telecomunicaciones nacional e
            internacional. Nuestra 
            <br></br>
            <br></br>
            <strong>Misión:</strong> es brindar asistencia técnica
            especializada en la correcta instalación, mantenimiento y
            funcionamiento de todos los recursos tecnológicos de
            telecomunicaciones, manteniendo un enfoque de calidad, trabajo en
            equipo y buen servicio al cliente. 
            <br></br>
            <br></br>
            <strong>Nuestra Visión:</strong>  Consolidarnos
            como la empresa líder en el mercado de servicio técnico
            especializado de telecomunicaciones del país, manteniendo un nivel
            de exigencia con procesos de mejora continua, basados en la
            innovación que constantemente evoluciona.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={ImgNosotros}
            alt="Image"
            style={{
              width: "100%",
              height: "550px",
              objectFit: "cover",
              borderRadius:"15px"
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default NosotrosHomeMain;
