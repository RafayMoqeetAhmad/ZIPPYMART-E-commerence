import React from 'react';

function Header({ setView, cartCount, searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>ZippyMart Site</h1>
      <nav>
        <button onClick={() => setView('about')}>About Us</button>
        <button onClick={() => setView('privacy')}>Privacy Policy</button>
        <button onClick={() => setView('products')}>Products</button>
        <button onClick={() => setView('cart')}>Cart ({cartCount})</button>
      </nav>
      {/* Added search input for product filtering */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;