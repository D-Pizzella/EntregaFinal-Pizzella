// App.jsx

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import ProductsComponent from './components/products/ProductsComponent';
import NavBar from './components/navigation/NavBar';
import SingleProduct from './components/product/SingleProduct';
import CategoryComponent from './components/categories/CategoryComponent';
import CarritoComponent from './components/carrito/CarritoComponent';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existenteIndex = carrito.findIndex(item => item.id === producto.id);

    if (existenteIndex !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito[existenteIndex].cantidad++;
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, {...producto, cantidad: 1}]);
    }
  };

  const quitarDelCarrito = (productoId) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    const nuevoCarrito = carrito.map((producto) => {
      if (producto.id === productoId) {
        return { ...producto, cantidad: nuevaCantidad };
      }
      return producto;
    });
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar carrito={carrito} />
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/products" element={<ProductsComponent />} />
          <Route exact path="/product/:prodId" element={<SingleProduct />} />
          <Route
            exact
            path="/category/:catID"
            element={<CategoryComponent agregarAlCarrito={agregarAlCarrito} />}
          />
          <Route
            exact
            path="/carrito"
            element={<CarritoComponent carrito={carrito} quitarDelCarrito={quitarDelCarrito} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
