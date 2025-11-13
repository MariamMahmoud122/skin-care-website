import React from "react";
import Watermark from "./components/Watermark";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer"; 
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Contact/>
      <Footer />
      <Watermark />
    </div>
    </>
  );
}

export default App;
