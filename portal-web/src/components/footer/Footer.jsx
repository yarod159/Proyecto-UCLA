import "./footer.css";
import Fc from "../../assets/redes-sociales/fc.png";
import Ig from "../../assets/redes-sociales/ig.png";
import Tw from "../../assets/redes-sociales/tw.png";
import Discord from "../../assets/redes-sociales/discord.png";
import logo from "../../assets/Logos/logo-blanco.png";


function Footer() {
  return (
    <div className="container-footer">
      <div className="wrapper-footer-social-networks ">
        <div>
          <a href="https://www.facebook.com/">
            {" "}
            <img src={Fc} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/">
            {" "}
            <img src={Ig} alt="" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/">
            {" "}
            <img src={Tw} alt="" />
          </a>
        </div>
        <div>
          <a href="https://discord.com/invite/">
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>

      <div className="wrapper-footer conteiner row">
        <div className="footer-col footer-cg-logo">
          <img style={{width:"90px", height:"104px" , borderRadius:"10px"}} src={logo} alt="" />
          <ul>
            <li>
              <a href="#">support@kinetika.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kinetika</h4>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Cerrar sesión</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Soporte</h4>
          <ul>
            <li>
              <a href="#">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Politica de Privacidad</a>
            </li>
            <li>
              <a href="#">Terminos de Servicio</a>
            </li>
            <li>
              <a href="#">Política de Copyright</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-trust">
         
        </div>
      </div>

      <div className="wrapper-footer-reserved">
        <div >
          <p style={{color:"#fff"}}>© 2024 Kinetika.com. <br />  All Rights Reserved. </p>
        </div>
        
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
