import React from 'react';
import UserNavbar from '../../components/UserNavBar/UserNavBar';
import Footer from '../../components/footer/Footer';
import './DescripcionServicio.css'; 
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const DescripcionServicio = () => {
  return (
    <>
      <UserNavbar />
      <main className="descripcion-servicio">
        <section className="productos" id="productos">
          <h1>Productos</h1>
          <p>Descripción:
            Ofrecemos una amplia gama de productos de alta calidad diseñados para satisfacer sus necesidades específicas. Desde [incluya algunos ejemplos de sus productos más populares] hasta [incluya otros productos destacados], tenemos algo para todos.
          </p>
        </section>
        <section className="nuestros-servicios" id="servicios">
          <h1>Nuestros Servicios</h1>
          <p>Brindamos una amplia gama de servicios para ayudarlo a tener éxito. Desde [incluya algunos ejemplos de sus servicios más populares] hasta [incluya otros servicios destacados], tenemos el conocimiento y la experiencia para ayudarlo a lograr sus objetivos.</p>
        </section>
        <section className="reparacion" id="reparacion">
          <h1>Reparación</h1>
          <p>Ofrecemos servicios de reparación confiables para una amplia gama de productos. Ya sea que su [incluya un ejemplo de un producto que repara comúnmente] esté funcionando mal o su [incluya otro ejemplo de un producto que repara comúnmente] necesite mantenimiento, podemos ayudarlo.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DescripcionServicio;
