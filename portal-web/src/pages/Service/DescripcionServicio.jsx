import React from 'react';
import UserNavbar from '../../components/UserNavBar/UserNavBar';
import Footer from '../../components/footer/Footer';
import './DescripcionServicio.css';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import img1 from '../../assets/imagenes/telecom2.jpg';
import img2 from '../../assets/imagenes/Tel4.jpg';
import img3 from '../../assets/imagenes/telecom3.jpg';
const Section = ({ title, description, id }) => {
  return (
    <section className={`section ${id}`} id={id}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </section>
  );
};

const DescripcionServicio = () => {
  return (
    <>
      <UserNavbar />
      <main className="descripcion-servicio">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Section
              title="Productos"
              description={
                <>
                  <Typography variant="h4">Nuestra Amplia Gama de Productos</Typography>
                  <Typography variant="body1">Nos enorgullecemos de ofrecer una amplia gama de productos de telecomunicaciones de alta calidad diseñados para satisfacer sus necesidades específicas</Typography>
                  <ul>
                    <li>Telefonía: Ofrecemos una variedad de teléfonos fijos, inalámbricos y celulares</li>
                    <li>Internet: Disfrute de acceso a internet de alta velocidad con nuestras opciones de DSL, cable, fibra óptica e inalámbricas</li>
                    <li>Televisión: Disfrute de sus programas y películas favoritos en alta definición con nuestros servicios de televisión por cable, satelital y streaming</li>
                    <li>Seguridad: Proteja su hogar, negocio o datos con nuestros servicios de seguridad para el hogar, seguridad empresarial y seguridad de datos</li>
                  </ul>
                </>
              }
              id="productos"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={img1} alt="Imagen de producto" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Section
              title="Nuestros Servicios"
              description={
                <>
                  <Typography variant="h4">Nuestra Amplia Gama de Servicios</Typography>
                  <Typography variant="body1" style={{ textAlign: 'justify' }}>Más allá de ofrecer productos de telecomunicaciones de alta calidad, nos distinguimos por la atención personalizada y el acompañamiento integral que brindamos a nuestros clientes</Typography>
                  <ul>
                    <li>Servicios de Instalación: Instalación profesional de equipos</li>
                    <li>Asesoría personalizada: Nuestros expertos le brindarán asesoría personalizada</li>
                    <li>Servicios de Mantenimiento: Planes de mantenimiento preventivo</li>
                    <li>Servicios Adicionales: Capacitación y entrenamiento</li>
                  </ul>
                </>
              }
              id="servicios"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={img2} alt="Imagen de servicios" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Section
              title="Reparaciones"
              description={
                <>
                  <Typography variant="h4">Reparaciones</Typography>
                  <Typography variant="body1" style={{ textAlign: 'justify' }}>Somos especialistas en la reparación de todo tipo de módems y routers, tanto de marcas reconocidas como de modelos menos comunes. Contamos con un equipo de técnicos altamente capacitados y con experiencia en la resolución de una amplia gama de fallas, incluyendo:</Typography>
                  <ul>
                    <li>Problemas de conexión a internet: Si no puedes conectarte a internet o la conexión es intermitente, podemos diagnosticar la causa y solucionarla rápidamente.</li>
                    <li>Mantenimiento preventivo: Realizamos revisiones periódicas de tu módem y router para identificar y prevenir posibles problemas futuros.</li>
                    
                  </ul>
                </>
              }
              id="reparaciones"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={img3} alt="Imagen de reparaciones" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export default DescripcionServicio;
