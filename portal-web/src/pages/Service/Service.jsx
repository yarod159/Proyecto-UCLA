import { Link } from "react-router-dom";

import Navbar from "../../components/responsiveAppBar/ResponsiveAppBar";

import Footer from "../../components/footer/Footer";
import { useState } from "react";

function Service() {
  {
    /*
  const services = ServicesData.map((service) => {

    const { id, nombre, precio, foto } = service;
    return (
      <div key={service.id}>
        <div className="wrapper-service">
          <img src={foto} className="service-foto" />
         
          <div className="details-service">
          <hr />
            <h3 className="service-h3">
              <Link to={`/servicio/${id}`}>{nombre}</Link>
            </h3>
           
            <p className=" service-precio">Price: ${precio}</p>
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
      <div className="service-background">
      <FilterService />
      </div>
      {/*<div className="service-background">
        <h1 className="service-h1">Services Page</h1>
        <div className="container-service"> {services}</div>
      </div>
    */}
      <Footer />
    </>
  );
}

export default Service;
