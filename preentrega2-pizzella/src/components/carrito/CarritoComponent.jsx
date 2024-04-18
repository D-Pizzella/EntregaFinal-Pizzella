import React from 'react';

export default function CarritoComponent({ carrito, quitarDelCarrito, actualizarCantidad }) {
  const handleCantidadChange = (event, productoId) => {
    const nuevaCantidad = parseInt(event.target.value);
    actualizarCantidad(productoId, nuevaCantidad);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              {producto.title} - ${producto.price} x
              <input
                type="number"
                min="1"
                value={producto.cantidad}
                onChange={(event) => handleCantidadChange(event, producto.id)}
              />
              <button onClick={() => quitarDelCarrito(producto.id)}>Quitar del carrito</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
