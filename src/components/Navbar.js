import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <div className="w-full">
      <nav className="flex justify-around  bg-slate-700 py-5 text-white">
        <div>
          <Link className="text-xl font-bold" to="/">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
        </div>
        <div className="md:hidden font-bold text-2xl" onClick={handleClick}>
          <Link to="/">
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </Link>
        </div>
        <ul className="hidden md:flex md:space-x-10">
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/servises" onClick={closeMobileMenu}>
              Servises
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={closeMobileMenu}>
            sign up
            </Link>
          </li>
         
        </ul>
        
      </nav>
      {click && <MobileNavbar closeMobileMenu={closeMobileMenu} />}
    </div>
  );
}

export default Navbar;
