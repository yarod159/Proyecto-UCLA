import { Link } from "react-router-dom";
import ProductsData from "../../utils/ProductsData";
import Navbar from "../../components/responsiveAppBar/ResponsiveAppBar";
import "./product.css";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import FilterProduct from "../../components/filterProduct/FilterProduct";

function Product() {
  {
    /*
  const products = ProductsData.map((product) => {

    const { id, nombre, precio, foto } = product;
    return (
      <div key={product.id}>
        <div className="wrapper-product">
          <img src={foto} className="product-foto" />
         
          <div className="details-product">
          <hr />
            <h3 className="product-h3">
              <Link to={`/producto/${id}`}>{nombre}</Link>
            </h3>
           
            <p className=" product-precio">Price: ${precio}</p>
          </div>
        </div>
      </div>
    );
  });
   */
  }
  return (
    <>
      <Navbar />
      <div className="product-background">
        <FilterProduct />
      </div>
      {/*<div className="product-background">
        <h1 className="product-h1">Products Page</h1>
        <div className="container-product"> {products}</div>
      </div>
    */}
      <Footer />
    </>
  );
}

export default Product;
