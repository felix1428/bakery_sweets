import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Signature = () => {
  // Product data
  const newArrivals = [
    {
      name: 'Affable Nutella Cake',
      category: 'CAKES, CREAM CAKES',
      priceRange: '₹400.00 – ₹800.00',
      imageUrl: 'https://example.com/nutella_cake.jpg', // Replace with valid image URL
    },
    {
      name: 'Almond / Badam Bar Cake',
      category: 'CAKES, DRY CAKES',
      priceRange: '₹40.00 – ₹600.00',
      imageUrl: 'https://example.com/almond_bar.jpg', // Replace with valid image URL
    },
    {
      name: 'Ashoka Halwa',
      category: 'SWEETS (NORMAL & GHEE)',
      priceRange: '₹100.00 – ₹400.00',
      imageUrl: 'https://example.com/ashoka_halwa.jpg', // Replace with valid image URL
    },
    // Add more items here...
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col lg:flex-row py-8 gap-12">
      {/* Left Column - Shreem's Signature */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl font-bold">Shreem's Signature Products</h2>
        <p className="text-gray-600 mt-2">
          Our Special Products With Immense Customer Satisfaction
        </p>
      </div>

      {/* Right Column - New Arrivals Carousel */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-center">New Arrivals In Store</h2>
        <p className="text-gray-500 text-center mb-4">Displaying Our New Additions</p>
        <Slider {...settings}>
          {newArrivals.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-800 font-bold">{product.priceRange}</p>
                  
                  {/* Quantity label */}
                  <p className="text-gray-600 mt-2">Qty</p>

                  {/* Quantity controls */}
                  <QuantitySelector />

                  {/* Add to Cart button */}
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Quantity Selector component for reuse
const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
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
  );
};

export default Signature;
