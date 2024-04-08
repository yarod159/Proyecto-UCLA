import { useParams } from "react-router-dom";
import Navbar from "../../components/responsiveAppBar/ResponsiveAppBar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from 'react-router-dom';



import { useState } from "react";
function ServiceDetails() {
  const navigate = useNavigate();
  
 

  const [carrito, setCarrito] = useState([]);

  const handleAddToCart = () => {
    const nuevoServicio = { ...thisService, cantidad: 1 };
    setCarrito([...carrito, nuevoServicio]);
    navigate('/carrito', { state: { carrito } });
  };
  
 
  return (
    <div>
      <Navbar />

      <div className="container-Sdetails">
       
        <div className="wrapper-Sdetails">
          <div>
            <img className="Sdetails-foto" src={thisService.foto} alt="" />
          </div>
          <div className="wrapper-Sdetails-Caracteristica">
            <h1>{thisService.nombre}</h1> <br />
            <p>Precio: ${thisService.precio}</p> <br />
            <p>{thisService.caracteristicas}</p> <br />
            <button onClick={handleAddToCart }>Comprar ahora</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceDetails;
