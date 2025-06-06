import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './pages/Home.jsx';
import Offers from './pages/Offers.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

const App = () => {
  return (
    <div >
      <div>
        <Navbar/>
      </div>
      <div class="app">
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
