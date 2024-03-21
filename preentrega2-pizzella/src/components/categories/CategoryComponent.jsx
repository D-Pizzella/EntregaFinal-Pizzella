import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
import '../../styles/CategoryComponent.css';

export default function CategoryComponent() {
  const { catID } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      const filteredProducts = data.filter((product) => product.category === catID);
      setProducts(filteredProducts);
    });
  }, [catID]);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div>{catID}</div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <br />
            <button onClick={() => handleClick(product.id)}>Ver detalle</button>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}