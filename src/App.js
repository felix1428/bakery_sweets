import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductPage from './pages/Products';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect from root path to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
