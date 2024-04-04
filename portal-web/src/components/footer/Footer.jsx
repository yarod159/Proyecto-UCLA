import React from 'react';
import "./footer.css"; // Asegúrate de que el archivo CSS esté importado correctamente
import logo from "../../assets/Logos/logo-blanco.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
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
          <p>Kinetika</p>
          <p></p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="#"><FacebookIcon className="sidebarIcon"/></a>
            <a href="#"><InstagramIcon 
              sx={{
                ":hover": {
                  color: '#454545', // Cambia el color de fondo al pasar el cursor
                },
              }}
            className="sidebarIcon"
            
            
            
            /></a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2024 <b>Desarrollado por: Kinetika</b></small>
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