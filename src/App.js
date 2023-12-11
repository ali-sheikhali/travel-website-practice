import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <HeroSection />
        <Cards /> */}
        <Routes>
          <Route path="/" exact Component={Home}  />
          <Route path="/services"  Component={Services}  />
          <Route path="/products" exact Component={Products}  />
          <Route path="/sign-up" exact Component={SignUp}  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
