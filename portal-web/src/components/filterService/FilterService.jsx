import { useState } from "react";
import ServicesData from "../../utils/ServicesData";
import { Link } from "react-router-dom";
import "../../pages/Service/Service.css";

function FilterService() {
  const [precioMin, setPrecioMin] = useState(""); // Precio mínimo
  const [precioMax, setPrecioMax] = useState(""); // Precio máximo
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const handlePrecioMinChange = (event) => {
    setPrecioMin(event.target.value);
  };

  const handlePrecioMaxChange = (event) => {
    setPrecioMax(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const filteredServices = ServicesData.filter((service) => {
    const precioService = service.precio;
    const categoriaService = service.categoria;

    // Filtrar por precio
    if (precioMin && precioService < precioMin) {
      return false;
    }
    if (precioMax && precioService > precioMax) {
      return false;
    }

    // Filtrar por categoría
    if (
      categoriaSeleccionada !== "todos" &&
      categoriaService !== categoriaSeleccionada
    ) {
      return false;
    }

    return true;
  });

  const services = filteredServices.map((service) => {
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
            <p className="service-precio">Price: ${precio}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="Sfilter-container">
        <div className="Scontainer-filter-checkbox">
          
          <label className="name-categoria-service" htmlFor="categoriaSeleccionada">Categoría:</label>
          <select
            className="Scategory-select"
            value={categoriaSeleccionada}
            onChange={handleCategoriaChange}
            id="categoriaSeleccionada"
          >
            <option value="todos">Todos</option>
            <option value="internet">Internet</option>
            <option value="telefonia">Telefonia Movil</option>
            <option value="tv">Television por cable</option>
          </select>
        </div>
        <div className="container-service"> {services}</div>
      </div>
    </>
  );
}

export default FilterService;
