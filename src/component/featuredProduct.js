import React, { useState } from 'react';
import third from '../images/third.png';
import logo from '../images/logo.png';

const FeaturedProducts = () => {
  const [quantities, setQuantities] = useState(
    new Array(5).fill(1) // Initialize quantity state for 5 products
  );

  const products = [
    {
      name: '2 Tier Chocolate Cake',
      category: 'CAKES, CREAM CAKES',
      priceRange: '₹750.00 – ₹1,500.00',
      imageUrl: third,
    },
    {
      name: '6 Layer Choco Vanilla Cake',
      category: 'CAKES, CREAM CAKES',
      priceRange: '₹600.00 – ₹1,200.00',
      imageUrl: logo,
    },
    {
      name: 'Almond / Badam Barfi',
      category: 'CAKES, DRY CAKES',
      priceRange: '₹40.00 – ₹600.00',
      imageUrl: logo,
    },
    {
      name: 'Affable Nutella Cake',
      category: 'CAKES, CREAM CAKES',
      priceRange: '₹400.00 – ₹800.00',
      imageUrl: logo,
    },
    {
      name: 'Apple Cake',
      category: 'CAKES, DRY CAKES',
      priceRange: '₹250.00 – ₹500.00',
      imageUrl: logo,
    },
  ];

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  return (
    <section className="featured-products py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="product-card bg-white rounded-lg shadow-md p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-40 w-full object-cover rounded-lg"
            />
            <p className="text-gray-500 text-sm mt-2">{product.category}</p>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-800 font-bold">{product.priceRange}</p>

            {/* Quantity Controls */}
            <div className="flex justify-between items-center mt-4">
              <p>Qty:</p>
              <div className="flex items-center space-x-2">
                <button
                  className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                  onClick={() => decrementQuantity(index)}
                >
                  -
                </button>
                <span>{quantities[index]}</span>
                <button
                  className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                  onClick={() => incrementQuantity(index)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex justify-center w-full mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
