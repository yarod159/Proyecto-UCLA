import { useState } from "react";
import ProductsData from "../../utils/ProductsData";
import { Link } from "react-router-dom";
import "../../pages/Product/product.css";

function FilterProduct() {
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

  const filteredProducts = ProductsData.filter((product) => {
    const precioProducto = product.precio;
    const categoriaProducto = product.categoria;

    // Filtrar por precio
    if (precioMin && precioProducto < precioMin) {
      return false;
    }
    if (precioMax && precioProducto > precioMax) {
      return false;
    }

    // Filtrar por categoría
    if (
      categoriaSeleccionada !== "todos" &&
      categoriaProducto !== categoriaSeleccionada
    ) {
      return false;
    }

    return true;
  });

  const products = filteredProducts.map((product) => {
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
            <p className="product-precio">Price: ${precio}</p>
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
          <label className="name-categoria-product" htmlFor="categoriaSeleccionada">Categoría:</label>
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
        <div className="container-product"> {products}</div>
      </div>
    </>
  );
}

export default FilterProduct;
