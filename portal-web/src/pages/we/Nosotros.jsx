import { Link } from "react-router-dom";
import Navbar from "../../components/responsiveAppBar/ResponsiveAppBar";
import "./Nosotros.css";

import { useEffect, useState } from "react";

import axios from "axios";

import React from "react";

const Nosotros = () => {

  const [instalacion, setInstalacion] = useState({ mision: "", vision: "" });

  useEffect(() => {
    
    const fetchData = async () => {
       try {
         const response = await axios.get("http://localhost:3000/instalador/get-instalacion");
         // Access the nested data property
         const data = response.data.data;
         if (data && data.length > 0) {
           // Assuming you want to display the first company's mission and vision
           const firstCompany = data[0];
           setInstalacion({ mision: firstCompany.mision, vision: firstCompany.vision });
         } else {
           console.log("No data found in response");
         }
       } catch (error) {
         console.error("Error fetching data:", error);
       }
    };
   
    fetchData();
   }, []);


  return (
    <>
      <Navbar />

      <div className="container-nosotros">
        <div className="columnas-nosotros">
          <div className="seccion-mision">
            
            <div className="texto-mision">
              <h2>Misión</h2>
              <p>
              {instalacion.mision}
              
              </p>
            </div>
          </div>

          <div className="seccion-vision">
            <div className="texto-vision">
              <h2>Visión</h2>
              <p>
              {instalacion.vision}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
