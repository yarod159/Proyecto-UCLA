import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Nosotros.css";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import imagen1 from '../../assets/imagenes/imagen1.jpg';
import imagen2 from '../../assets/imagenes/vision1.png';

import React from 'react';

const Nosotros = () => {
  return (<>
  <Navbar />

    <div className="container-nosotros">
      <div className="columnas-nosotros">
        <div className="seccion-mision">
          <img src={imagen1} alt="Misión de la empresa" style={{ width: '400px' }} />
          <div className="texto-mision">
            <h2>Misión</h2>
            <p>Ser la empresa líder en telecomunicaciones del Estado venezolano, 
              reconocida por su eficiencia, innovación y compromiso social. 
              TELECOM se dedica a ofrecer servicios de alta calidad al pueblo venezolano, 
              a la vez que fortalece el talento humano, promueve la creatividad e innovación, 
              y contribuye al desarrollo social y económico del país.</p>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="seccion-vision">
          
          <h2>Visión</h2>
          <p>Transformar el futuro de las telecomunicaciones en Venezuela, 
            agregando valor y calidad de vida a nuestros clientes, colaboradores y al país.
            <br />
            <br />
            <br />
            <br />
          </p>
          <img src={imagen2} alt="Visión de la empresa" style={{ width: '500px' }} />
        </div>
      </div>
    </div>
    </>);
};


export default Nosotros;