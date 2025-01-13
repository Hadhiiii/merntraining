// Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

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

export default Products;
