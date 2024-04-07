import React from "react";
import Footer from "../../components/footer/Footer";
import SliderHome from "./components/slider/SliderHome";
import Services from "./Services/Services";
import Navbar from "../../components/responsiveAppBar/ResponsiveAppBar";
import img from "../../assets/imagenes/blanco.jpg";
import logo from "../../assets/Logos/logo2.png"; // Import the logo image

import img2 from "../../assets/imagenes/Tel5.jpg";
import img3 from "../../assets/imagenes/Tel1.jpg";
import "./Home2.css";
import Faq from "./components/FAQ/Faq";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="Hcontainer"
        style={{
          backgroundImage: `url(${img2})`,
          width: "100%",
          height: "500px",
          position: "relative",
        }}
      ></div>

      <SliderHome />
      <div
        className="Hcontainer"
        style={{
          backgroundImage: `url(${img3})`,
          width: "100%",
          height: "500px",
          position: "relative",
        }}
      ></div>
      <Services />
      <div
        className="Hcontainer"
        style={{
          backgroundImage: `url(${img})`,
          width: "100%",
          height: "500px",
          position: "relative",
        }}
      >
        <p
          style={{
            textAlign: "justify",
            marginLeft: "100px", // Ajusta el margen según sea necesario
            maxWidth: "400px", // Ajusta el ancho según sea necesario
            fontSize: "16px", // Ajusta el tamaño de fuente según sea necesario
            marginRight: "20px", // Añade un margen a la derecha para separar el texto de la imagen
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              textAlign: "center",
              marginLeft: "10px",
            }}
          >
            ¿Quienes Somos?
          </h2>
          Somos una empresa caracterizada por brindar calidad e innovación en
          sus productos y servicios, con más de 3 años satisfaciendo y superando
          las expectativas de hogares y negocios en toda Venezuela.
          <p></p>
          Contamos con un gran equipo de profesionales comprometidos en
          transformar tu experiencia con el servicio, agregando valor humano en
          cada proceso dentro de nuestra organización.
        </p>
        <img src={logo} alt="Logo" style={{ marginLeft: "180px" }} />{" "}
        {/* Añade un margen a la izquierda de la imagen para separarla del texto */}
      </div>
      <FilterService />
      <div>
        <Faq/>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
