import { useParams } from "react-router-dom";
import ProductsData from "../../utils/ProductsData";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from 'react-router-dom';


import "./productDetail.css";
import { useState } from "react";

function ProductDetail() {

  const navigate = useNavigate();
  const { productId } = useParams();
  const thisProduct = ProductsData.find((prod) => prod.id === productId);

  const [carrito, setCarrito] = useState([]);

  const handleAddToCart = () => {
    const nuevoProducto = { ...thisProduct, cantidad: 1 };
    setCarrito([...carrito, nuevoProducto]);
    navigate('/carrito', { state: { carrito } });
  };
  
 
  return (
    <div>
      <Navbar />

      <div className="container-Pdetails">
       
        <div className="wrapper-Pdetails">
          <div>
            <img className="Pdetails-foto" src={thisProduct.foto} alt="" />
          </div>
          <div className="wrapper-Pdetails-Caracteristica">
            <h1>{thisProduct.nombre}</h1> <br />
            <p>Precio: ${thisProduct.precio}</p> <br />
            <p>{thisProduct.caracteristicas}</p> <br />
            <p> Color ( {thisProduct.color} ) disponible</p> <br />
            <p> Cantidad : ( {thisProduct.cantidad} ) disponible</p> <br />
            <button onClick={handleAddToCart }>Comprar ahora</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
