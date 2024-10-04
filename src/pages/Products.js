import React, { useState } from 'react';
import third from '../images/third.png';
import logo from '../images/logo.png';
import Navbar from '../component/Navbar';

const productsData = {
  sweets: [
    { name: 'Badam Halwa', price: '₹225.00 – ₹900.00', image: third },
    { name: 'Badam Katli', price: '₹225.00 – ₹900.00', image: logo },
    { name: 'Badam Peda', price: '₹200.00 – ₹800.00', image: logo },
    { name: 'Badam Roll', price: '₹225.00 – ₹900.00', image: logo },
  ],
  karams: [
    { name: 'Karam Item 1', price: '₹150.00 – ₹500.00', image: logo },
    { name: 'Karam Item 2', price: '₹180.00 – ₹600.00', image: logo },
  ],
  cakes: [
    { name: 'Chocolate Cake', price: '₹500.00 – ₹1500.00', image: third },
    { name: 'Fruit Cake', price: '₹400.00 – ₹1300.00', image: logo },
  ],
};

const ProductCard = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="product-card bg-white rounded-lg shadow-md p-4 text-center">
      <img src={image} alt={name} className="h-40 w-full object-cover rounded-lg" />
      <h4 className="text-lg font-semibold mt-4">{name}</h4>
      <p className="text-gray-800 font-bold">{price}</p>
      
      {/* Quantity label */}
      <p className="text-gray-600 mt-2">Qty</p>

      {/* Quantity controls */}
      <div className="flex items-center justify-center mt-2">
        <button 
          className="px-2 py-1 bg-gray-300 rounded-l-lg text-lg font-semibold"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="px-4 py-1 border-t border-b border-gray-300 text-lg font-semibold">
          {quantity}
        </span>
        <button 
          className="px-2 py-1 bg-gray-300 rounded-r-lg text-lg font-semibold"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      {/* Add to Cart button */}
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

const ProductSection = ({ title, products }) => (
  <section className="py-8">
    <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
  </section>
);

const ProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <ProductSection title="Sweets" products={productsData.sweets} />
      <ProductSection title="Karams" products={productsData.karams} />
      <ProductSection title="Cakes" products={productsData.cakes} />
    </div>
  );
};

export default ProductPage;
