import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'

function MobileNavbar({closeMobileMenu}) {
  return (
    <div>
        <ul className="container md:hidden bg-slate-700 mt-1 text-center space-y-7 py-5 text-white">
          <li className='hover:bg-white hover:text-black py-4'>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='hover:bg-white hover:text-black py-4'>
            <Link to="/servises" onClick={closeMobileMenu}>
              Servises
            </Link>
          </li>
          <li className='hover:bg-white hover:text-black py-4'>
            <Link to="/products" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className=' py-4'>
            <Link to="/signup" onClick={closeMobileMenu}>
             <Buttons>Sign Up</Buttons> 
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default MobileNavbar