// e-commerce-app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const Home = () => (
  <div className="home">
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover Amazing Products</h1>
        <p className="hero-subtitle">Quality products at unbeatable prices, delivered right to your door.</p>
        <Link to="/products" className="btn btn-primary">Shop Now</Link>
      </div>
    </header>
    <section className="features">
      <div className="feature">
        <h2>Wide Selection</h2>
        <p>Choose from thousands of products across multiple categories.</p>
      </div>
      <div className="feature">
        <h2>Fast Shipping</h2>
        <p>Get your orders delivered quickly with our efficient shipping service.</p>
      </div>
      <div className="feature">
        <h2>Secure Payments</h2>
        <p>Enjoy a safe shopping experience with our secure payment options.</p>
      </div>
    </section>
  </div>
);

const Products = () => (
  <div className="products">
    <header className="products-header">
      <h1 className="products-title">Our Product Range</h1>
      <p className="products-subtitle">Explore top-quality items crafted for your lifestyle.</p>
    </header>
    <section className="product-list">
      <div className="product-card">
        <img src="/images/product1.jpg" alt="Product 1" className="product-image" />
        <h2 className="product-name">Product 1</h2>
        <p className="product-description">An amazing product to simplify your life.</p>
        <Link to="/product/1" className="btn btn-secondary">View Details</Link>
      </div>
      <div className="product-card">
        <img src="/images/product2.jpg" alt="Product 2" className="product-image" />
        <h2 className="product-name">Product 2</h2>
        <p className="product-description">Top-notch quality and performance.</p>
        <Link to="/product/2" className="btn btn-secondary">View Details</Link>
      </div>
      <div className="product-card">
        <img src="/images/product3.jpg" alt="Product 3" className="product-image" />
        <h2 className="product-name">Product 3</h2>
        <p className="product-description">Designed with care for your needs.</p>
        <Link to="/product/3" className="btn btn-secondary">View Details</Link>
      </div>
    </section>
  </div>
);

const ProductDetails = ({ id }) => (
  <div className="product-details">
    <h1>Product Details for Product {id}</h1>
    <p>Details about product {id}...</p>
    <Link to="/cart" className="btn">Add to Cart</Link>
  </div>
);

const Cart = () => (
  <div className="cart">
    <h1>Your Cart</h1>
    <p>No items in cart yet!</p>
    <Link to="/products" className="btn">Continue Shopping</Link>
  </div>
);

const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <Link to="/" className="btn">Go to Home</Link>
  </div>
);

const App = () => (
  <Router>
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={({ match }) => <ProductDetails id={match.params.id} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;