import { useParams } from "react-router-dom";
import ProductsData from "../../utils/ProductsData";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./productDetail.css";
function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = ProductsData.find((prod) => prod.id === productId);

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
            <button>Comprar ahora</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
