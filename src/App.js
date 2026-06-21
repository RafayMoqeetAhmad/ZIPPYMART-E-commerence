import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Privacy from './components/Privacy';
import Footer from './components/Footer'; // Added Footer import

import './App.css';
// import { ContactUs } from './components/Contact';

function App() {

  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products'); // 'products', 'cart', 'checkout', 'about', 'privacy'
  const [searchQuery, setSearchQuery] = useState(''); // For product search

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
    
      <Header 
        setView={setView} 
        cartCount={cart.length} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        
      />
      {view === 'products' && <ProductList addToCart={addToCart} searchQuery={searchQuery} />}
      {view === 'cart' && <Cart cart={cart} setCart={setCart} setView={setView} />}
      {view === 'checkout' && <Checkout cart={cart} setView={setView} />}
      {view === 'about' && <About />}
      {view === 'privacy' && <Privacy />}
      <Footer /> {/* Added Footer at the bottom */}
    </div>
  );
}

export default App;


