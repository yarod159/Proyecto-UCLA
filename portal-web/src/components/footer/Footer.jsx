import "./footer.css";
import Fc from "../../assets/redes-sociales/fc.png";
import Ig from "../../assets/redes-sociales/ig.png";
import Tw from "../../assets/redes-sociales/tw.png";
import Discord from "../../assets/redes-sociales/discord.png";
import Chicks from "../../assets/Logos/chicks-logo.svg";
import Trust from "../../assets/Logos/trustpilot.png";

function Footer() {
  return (
    <div className="container-footer">
      <div className="wrapper-footer-social-networks ">
        <div>
          <a href="https://www.facebook.com/Chicksgroup">
            {" "}
            <img src={Fc} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/chicksgold/">
            {" "}
            <img src={Ig} alt="" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/chicksgold">
            {" "}
            <img src={Tw} alt="" />
          </a>
        </div>
        <div>
          <a href="https://discord.com/invite/chicksgold">
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>

      <div className="wrapper-footer conteiner row">
        <div className="footer-col footer-cg-logo">
          <img src={Chicks} alt="" />
          <ul>
            <li>
              <a href="#">support@chicksgold.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Chicks Gold</h4>
          <ul>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Copyright Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-trust">
          <img src={Trust} alt="" />
          <a href="https://www.trustpilot.com/">Trustpilot Reviews</a>
        </div>
      </div>

      <div className="wrapper-footer-reserved">
        <div>
          <p>© 2017 - 2020 Chicksgold.com.</p>
        </div>
        <div>All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
