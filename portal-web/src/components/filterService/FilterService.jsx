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
      <div className="filter-container">
        <div className="container-filter-checkbox">
          <div className="price-filters">
            <label htmlFor="precioMin">Precio mínimo:</label>
            <input
              className="range-input"
              type="range"
              min="0"
              max="1000" // Adjust the maximum according to your data
              value={precioMin}
              onChange={handlePrecioMinChange}
              id="precioMin"
            />
            <span className="range-value">${precioMin}</span>
            <br />
            <label htmlFor="precioMax">Precio máximo:</label>
            <input
              className="range-input"
              type="range"
              min="0"
              max="1000" // Adjust the maximum according to your data
              value={precioMax}
              onChange={handlePrecioMaxChange}
              id="precioMax"
            />
            <span className="range-value">${precioMax}</span>
          </div>
          <label className="name-categoria-service" htmlFor="categoriaSeleccionada">Categoría:</label>
          <select
            className="category-select"
            value={categoriaSeleccionada}
            onChange={handleCategoriaChange}
            id="categoriaSeleccionada"
          >
            <option value="todos">Todos</option>
            <option value="router">Routers</option>
            <option value="modem">Modems</option>
          </select>
        </div>
        <div className="container-service"> {services}</div>
      </div>
    </>
  );
}

export default FilterService;
