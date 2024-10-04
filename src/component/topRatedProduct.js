import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';

const TopRatedProducts = () => {
  const products = [
    {
      name: 'Roasted Masala',
      category: 'GRAM FLOUR NAMKEENS',
      priceRange: '₹120.00 - ₹1,200.00',
      rating: 4,
      imageUrl: 'https://example.com/masala.jpg',
    },
    {
      name: 'Soup Sticks',
      category: 'COOKIES',
      priceRange: '₹120.00 - ₹240.00',
      rating: 5,
      imageUrl: 'https://example.com/soupsticks.jpg',
    },
    {
      name: 'Chocolate Cream Cake',
      category: 'CAKES, CREAM CAKES',
      priceRange: '₹110.00 - ₹440.00',
      rating: 4.5,
      imageUrl: 'https://example.com/cake.jpg',
    },
    // Add more products as needed
  ];

  // Slider settings for autoplay and responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="top-rated-section px-4">
      <h2 className="text-3xl font-bold text-center my-8">Top Rated Products</h2>
      <p className="text-center text-gray-500 mb-12">Our Top Rated Products With Good Reviews</p>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-gray-500 text-sm">{product.category}</p>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-yellow-500">{'★'.repeat(Math.floor(product.rating))}</p>
                <p className="text-gray-800 font-bold">{product.priceRange}</p>
                
                {/* Quantity label */}
                <p className="flex justify-center text-gray-600 mt-2">Qty</p>

                {/* Quantity controls */}
                <QuantitySelector />

                {/* Add to Cart button */}
              <div className="flex justify-center w-full">
                <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
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

export default TopRatedProducts;
