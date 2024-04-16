import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./footer.css";
import logo from "../../assets/Logos/logo-blanco.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const [footerGet, setFooterGet] = useState({ nombreEmpresa: "" });

  useEffect(() => {
    
    const footerData = async () => {
       try {
         const response = await axios.get("http://localhost:3000/informacionGeneral/get-infoGeneral");
         // Access the nested data property
         const data = response.data.data;
         if (data && data.length > 0) {
           // Assuming you want to display the first company's mission and vision
           const firstCompany = data[0];
           setFooterGet({ nombreEmpresa: firstCompany.nombreEmpresa });
         } else {
           console.log("No data found in response");
         }
       } catch (error) {
         console.error("Error fetching data:", error);
       }
    };
   
    footerData();
   }, []);


 return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>{footerGet.nombreEmpresa}</p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a target="_blank" rel="noopener noreferrer"><FacebookIcon className="sidebarIcon"/></a>
            <a target="_blank" rel="noopener noreferrer"><InstagramIcon className="sidebarIcon"/></a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2024 <b>Desarrollado por: {footerGet.nombreEmpresa}</b></small>
      </div>
      <div className="grupo-2">
        <small>
          Solicitud de Servicio: 0251-7181107 / Soporte Técnico 0251-7181108
        </small>
      </div>
    </footer>
 );
};

export default Footer;
