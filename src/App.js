import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Cards />
        <Routes>
          <Route path="/"  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
