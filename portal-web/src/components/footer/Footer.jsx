import React from 'react';
import "./footer.css"; // Asegúrate de que el archivo CSS esté importado correctamente
import logo from "../../assets/Logos/logo1-hor-blanco.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
 return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="/home">
            <img src={logo} alt="" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <div style={{flexDirection:'column'}}>
          <a href="/home"><p>Inicio</p></a>
          <a href="/servicios"><p>Servicios</p></a>
          <a href="/AtencionAlCliente"><p>Atención al Cliente</p></a>
          <a href="/UserProfile"><p>Perfil</p></a>
          </div>
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