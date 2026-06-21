import React, { useState } from 'react';
import ProductCard from './ProductCard';

// Function to generate products dynamically (same as before)
const generateProducts = (count) => {
  const adjectives = ['High-performance', 'Wireless', 'Comfortable', 'Elegant', 'Portable', 'Durable', 'Stylish', 'Professional', 'Casual', 'Ergonomic', 'Compact', 'Versatile', 'Affordable', 'Premium', 'Eco-friendly'];
  const nouns = ['Laptop', 'Phone', 'Headphones', 'T-Shirt', 'Jeans', 'Book', 'Shoes', 'Watch', 'Tablet', 'Backpack', 'Camera', 'Dress', 'Sunglasses', 'Keyboard', 'Hat', 'Mouse', 'Jacket', 'Speaker', 'Bicycle', 'Coffee Maker', 'Monitor', 'Printer', 'Router', 'Charger', 'Lamp', 'Chair', 'Desk', 'Bag', 'Gloves', 'Socks', 'Toy', 'Game', 'Perfume', 'Wallet', 'Belt'];
  const categories = ['Electronics', 'Clothing', 'Books', 'Footwear', 'Accessories', 'Sports', 'Home', 'Furniture', 'Toys', 'Beauty', 'Kitchen', 'Outdoor', 'Automotive', 'Health', 'Pets'];
  const descriptions = [
    'Perfect for everyday use.', 'Top-rated in its category.', 'Designed for comfort and style.', 'High-quality materials.', 'Ideal for professionals.', 'Great value for money.', 'Compact and lightweight.', 'Long-lasting battery life.', 'Easy to use and maintain.', 'Versatile and functional.', 'Eco-friendly and sustainable.', 'Affordable luxury.', 'Durable and reliable.', 'Innovative design.', 'Customer favorite.'
  ];

  const products = [];
  for (let i = 1; i <= count; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const name = `${adj} ${noun}`;
    const price = Math.floor(Math.random() * 1000) + 10; // Random price between 10-1009
    const category = categories[Math.floor(Math.random() * categories.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const image = `https://picsum.photos/200/150?random=${i}`; // Unique image per ID

    products.push({ id: i, name, price, image, description, category });
  }
  return products;
};

const products = generateProducts(250); // Change 300 to your desired number (100-500)

function ProductList({ addToCart, searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Navigation functions
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default ProductList;


