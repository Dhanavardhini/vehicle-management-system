import React from 'react'
import './Rent.css'
import { Link } from 'react-router-dom'
function Rentlanding() {
  return (
    <>
    <div className="rentmain">
        <div className="hero">
    <div className="hero-content1">
            <h1>RideEasy Rentals</h1>
            <p className="tagline">Your journey, your choice. Rent with ease.</p>
            <div className="btn-container2">
                <Link to={"/ad"}><a href="#" className="btn1 btn-primary1">Admin Login</a></Link>
                <Link to={"/userlogin"}><a href="#" className="btn1 btn-secondary2">User Login</a></Link>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Rentlanding