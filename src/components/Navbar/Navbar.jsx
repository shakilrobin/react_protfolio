import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name"> Robin</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Protfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button n-bitton">Contact</button>
        </div>
    </div>
  )
}

export default Navbar