import React, { useState, useEffect } from "react";
import "../App.css";
import trail from "../images/trail.png";
import second from "../images/second.png";
import third from "../images/third.png";
import Navbar from "../component/Navbar";
import secure from "../images/secure.png";
import giftbox from "../images/giftbox.png";
import repeat from "../images/Repeat.png";
import ship from "../images/ship.jfif";
import TopRatedProducts from "../component/topRatedProduct";
import FeaturedProducts from "../component/featuredProduct";
import Footer from "../component/Footer";


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    trail, second, third
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-black-800 text-gray-900">
      <div className="p-4 space-y-8">
        <header>
          <Navbar />
        </header>

        <main>
          <div className="container mx-auto space-y-16">
            <section>
              <div className="flex-grow">
                <div className="p-4 sm:p-8 md:p-12 lg:p-16 mx-auto flex-grow">
                  <div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded-lg">
                    {/* Image Slider */}
                    <img
                      src={images[currentImage]}
                      alt="Random"
                      className="w-full h-auto object-cover bg-gray-500"
                    />
                    <div className="p-6 pb-10 mt-6 space-y-6 mx-auto bg-white bg-opacity-70 dark:bg-gray-50 dark:bg-opacity-50 rounded-lg">
                      <div className="timer text-gray-800 dark:text-gray-800 text-center"></div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
                  <div style={{ textAlign: 'center', flexBasis: '20%', minWidth: '150px', marginBottom: '20px' }}>
                    <img src={ship} alt="Truck Icon" style={{ width: '40px', height: '40px' }} />
                    <h4>Free Shipping</h4>
                    <p>On All Orders Over Rs. 2000</p>
                  </div>
                  <div style={{ textAlign: 'center', flexBasis: '20%', minWidth: '150px', marginBottom: '20px' }}>
                    <img src={repeat} alt="Return Icon" style={{ width: '40px', height: '40px' }} />
                    <h4>Free Returns</h4>
                    <p>If Goods Have Any Problems</p>
                  </div>
                  <div style={{ textAlign: 'center', flexBasis: '20%', minWidth: '150px', marginBottom: '20px' }}>
                    <img src={secure} alt="Payment Icon" style={{ width: '40px', height: '40px' }} />
                    <h4>Secure Payment</h4>
                    <p>100% Secure Payment</p>
                  </div>
                  <div style={{ textAlign: 'center', flexBasis: '20%', minWidth: '150px', marginBottom: '20px' }}>
                    <img src={giftbox} alt="Gift Icon" style={{ width: '40px', height: '40px' }} />
                    <h4>Gift Service</h4>
                    <p>Support Gift Service</p>
                  </div>
                </div>



              </div>
            </section>

            <section>
              <div className="order-info text-black text-center">
                <h2>Get Ready To Taste Our Wide Range of Sweets And Bakery Products From Your Home. Order Now !!!</h2>

                <h3>
                  WhatsApp Anytime For Orders @{" "}
                  <a href="https://wa.me/919442714545">+91-9442714545</a>
                </h3>

                <p>Get Your Products At Special Prices !!!</p>

                <p>Shipping for Tamil Nadu, Kerala, Andhra Pradesh And Karnataka Only Available.</p>
              </div>
            </section>
            
          </div>
          
              <div className="p-4 mt-10 sm:p-8 md:p-16 lg:p-20 xl:p-40 space-y-8">
              <h2 className="text-3xl font-bold text-center  mb-8">Hand Made Cookies & Biscuits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      <div className="max-w-xs mx-auto rounded-md shadow-md bg-white text-black-800 overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://source.unsplash.com/random/300x300/?donut"
            alt="Card 1"
            className="object-cover object-center w-full h-48 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">Donut Delight</h2>
              <p className="text-gray-400">A soft and sugary donut treat.</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="max-w-xs mx-auto rounded-md shadow-md bg-white text-black-800 overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://source.unsplash.com/random/300x300/?donut"
            alt="Card 2"
            className="object-cover object-center w-full h-48 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">Donut Delight</h2>
              <p className="text-gray-400">A soft and sugary donut treat.</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="max-w-xs mx-auto rounded-md shadow-md bg-white text-black-800 overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://source.unsplash.com/random/300x300/?donut"
            alt="Card 3"
            className="object-cover object-center w-full h-48 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">Donut Delight</h2>
              <p className="text-gray-400">A soft and sugary donut treat.</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="max-w-xs mx-auto rounded-md shadow-md bg-white text-black-800 overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://source.unsplash.com/random/300x300/?donut"
            alt="Card 4"
            className="object-cover object-center w-full h-48 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">Donut Delight</h2>
              <p className="text-gray-400">A soft and sugary donut treat.</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="max-w-xs mx-auto rounded-md shadow-md bg-white text-black-800 overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://source.unsplash.com/random/300x300/?donut"
            alt="Card 5"
            className="object-cover object-center w-full h-48 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">Donut Delight</h2>
              <p className="text-gray-400">A soft and sugary donut treat.</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="max-w-xs mx-auto rounded-md shadow-md bg-white text-black-800 overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img
            src="https://source.unsplash.com/random/300x300/?donut"
            alt="Card 6"
            className="object-cover object-center w-full h-48 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">Donut Delight</h2>
              <p className="text-gray-400">A soft and sugary donut treat.</p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      
      <FeaturedProducts/>
      <TopRatedProducts/>
              </div>
        </main> 
        <Footer/>  
      </div>
    </div>
  );
}
