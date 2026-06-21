import React from 'react';

function ProductCard({ product, addToCart, }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
      <div className="card-buttons">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
    
      </div>
    </div>
  );
}

export default ProductCard;

