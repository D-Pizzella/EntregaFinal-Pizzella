import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
import '../../styles/ProductsComponent.css'; 

export default function ProductsComponent() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
    console.log('Recibiendo datos!!!');
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div>
        <h1>Productos</h1>
        <section className="products-container">
          {products.map((product) => (
            <article
              key={product.id}
              className="product-card"
            >
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} />
              <p>Precio $ {product.price}</p>
              <button onClick={() => handleClick(product.id)}>
                Ver detalle
              </button>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

