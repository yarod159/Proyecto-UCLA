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
import { Box } from "@mui/material";
import Presentacion from "./components/Presentacion/Presentacion";
import BackgroundHomeUno from "../../assets/background/backgroundHome.png";
import NosotrosHomeMain from "./components/nosotros/NosotrosHomeMain";

function Home() {
  return (
    <Box sx={{
      // Esto es necesario para que la imagen de fondo se posicione correctamente
      minHeight: '100vh', // Asegura que el Box tenga al menos la altura de la ventana del navegador
      backgroundImage: `url(${BackgroundHomeUno})`, // Usa la imagen de fondo
      backgroundPosition: 'center', // Centra la imagen de fondo
      backgroundSize: 'cover', // Asegura que la imagen cubra todo el espacio disponible
      backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    
    }}>
      <Navbar />
      <Presentacion/>
      <Services />
      <NosotrosHomeMain/>
      
      <Box>
        <Faq/>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
