import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from 'react-router-dom';


import "./ServiceDetail.css";
import { useState } from "react";
import ServicesData from "../../utils/ServicesData";
function ServiceDetail() {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const thisService = ServicesData.find((serv) => serv.id === serviceId);

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

export default ServiceDetail;
