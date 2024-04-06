import React from 'react'
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { Link } from 'react-router-dom'; // For declarative navigation (optional)
import { useLocation } from 'react-router-dom';


function Ecommerce() {

    const { carrito } = useLocation().state;
  
  return (
    <div>
      <h1>Carrito de compras</h1>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <p>{producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio: ${producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ecommerce