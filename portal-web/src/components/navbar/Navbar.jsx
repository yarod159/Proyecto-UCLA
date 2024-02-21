import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import logo from "../../assets/Logos/logo1.png";
import Carrito from "../../assets/icon/carro-de-la-compra.png"
import RsTw from "../../assets/redes-sociales/twitter.png";
import Tlf from "../../assets/redes-sociales/telefono.png";
import RsIg from "../../assets/redes-sociales/Instagram.png";

import Router from "../../assets/icon/router.png";
import Modem from "../../assets/icon/modem.png";
import Switch from "../../assets/icon/switch.png";
import CamaraS from "../../assets/icon/camaraS.png";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const [isActive, setIsActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState("");

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const showSubMenu = (menuTitle) => {
    setOpenSubMenu(menuTitle);
  };

  const hideSubMenu = () => {
    setOpenSubMenu("");
    setCurrentMenuTitle("");
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-item-has-children");
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener(
        "click",
        showSubMenu.bind(null, menuItem.innerText)
      );
    });

    return () => {
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener(
          "click",
          showSubMenu.bind(null, menuItem.innerText)
        );
      });
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 991 && isActive) {
      toggleMenu();
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <header className="header">
      <div className="barra-redes">
        <img src={RsIg} alt="" />
        <img src={RsTw} alt="" />
        <img src={Tlf} alt="" />
        <p>0251-4354820</p>
      </div>
      <div className="container">
        <div className="row v-center size padding-top navbar-rigth">
          <div className="header-item item-left">
            <div className="logo">
              <img style={{width:"75px", height:"75px", marginLeft:"25px"}} src={logo} alt="DCYT Logo" />
             
            </div>
          </div>
          <div className="header-item item-center">
            <div className={`menu-overlay ${isActive ? "active" : ""}`} />
            <nav className={`menu ${isActive ? "active" : ""}`}>
              <div className="mobile-menu-head active">
                <div className="go-back" onClick={hideSubMenu}>
                  <div>x</div>
                </div>
                <div className="current-menu-title">{currentMenuTitle} </div>
                <div className="mobile-menu-close" onClick={toggleMenu}>
                  &times;
                </div>
              </div>
              <ul className="menu-main">
                <li onClick={(event) => showSubMenu(event)}>
                  <a onClick={handleClick} href="#">
                    Inicio
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/productos">
                    <a href="#">
                      Productos <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <div
                    className={`sub-menu mega-menu mega-menu-column-4 ${
                      openSubMenu === "Carreras" ? "active" : ""
                    }`}
                  >
                    <div className="list-item text-center">
                      <a href="#">
                        <img
                          style={{ width: "60px", paddingTop: "6px" }}
                          src={Modem}
                          alt="new Product"
                        />
                        <h4 className="title">Módems</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src={Router} alt="new Product" />
                        <h4 className="title">Routers</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src={Switch} alt="new Product" />
                        <h4 className="title">Switch</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img
                          style={{ width: "60px" }}
                          src={CamaraS}
                          alt="new Product"
                        />
                        <h4 className="title">Camara de Seguridad</h4>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="menu-item-has-children">
                  <a href="#">
                    Postgrados <i className="fa fa-angle-down" />
                  </a>
                  <div
                    className={`sub-menu mega-menu mega-menu-column-4 ${
                      openSubMenu === "Postgrados" ? "active" : ""
                    }`}
                  >
                    <div className="list-item">
                      <ul>
                        <li>
                          <a href="#">Informacíon General</a>
                        </li>
                        <li>
                          <a href="#">
                            Maestría en Ciencias: Física Matemática
                          </a>
                        </li>
                        <li>
                          <a href="#">Maestría en Ciencias: Matemática</a>
                        </li>
                        <li>
                          <a href="#">Maestría en Ciencias: Optimización</a>
                        </li>
                        <li>
                          <a href="#">
                            Maestría en Ciencias de la Computación: Ingeniería
                            de Software
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Maestría en Ciencias de la Computación: Inteligencia
                            Artificial
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Maestría en Ciencias de la Computación: Redes de
                            Computadores
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Especialización en Sistemas de Información
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">
                    Servicios <i className="fas fa-angle-down" />
                  </a>
                  <div
                    className={`sub-menu mega-menu mega-menu-column-4 ${
                      openSubMenu === "Servicios" ? "active" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <a href="#">Telefonia Movil</a>
                      </li>
                      <li>
                        <a href="#">Internet</a>
                      </li>
                      <li>
                        <a href="#">Television por cable</a>
                      </li>
                      <li>
                        <a href="#">Television satelital</a>
                      </li>
                      <li>
                        <a href="#">Servicios de consultoria</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">
                    Cursos <i className="fas fa-angle-down" />
                  </a>
                  <div
                    className={`sub-menu mega-menu mega-menu-column-4 ${
                      openSubMenu === "Cursos" ? "active" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <a href="#">Coordinación de Fomento</a>
                      </li>
                      <li>
                        <a href="#">Gestión de desarrollo de software</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-item-carrito">
            <img  style={{width:"25px" , cursor:"pointer",marginRight:"0px"}} src={Carrito} alt="carrito" />
          </div>

          <div className="header-item item-right">
            <div className="mobile-menu-trigger" onClick={toggleMenu}>
              <span />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
