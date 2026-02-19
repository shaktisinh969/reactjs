import React from 'react'
import './navbar.css' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h2>Shoply</h2>
      </div>

      <div className="list">
        <a href="#">Home</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About Us</a>
      </div>

      <button className='btns'>
        Login
      </button>
    </div>
  )
}

export default Navbar
