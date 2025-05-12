import React from 'react'
import "./userlanding.css"
import { Link } from 'react-router-dom'
function Userlanding() {
  return (
    <>
    <div className="user1-main">
    <nav className="navbar-user">
        <div className="navbar-container">
            <div className="logo">Vehicle Rental</div>
            <ul className="nav-links">
               <li><a href="#">Home</a></li>
               
                <Link to={"/mybooking"}><li><a href="#">My booking</a></li></Link>
                <Link to={"/userlogin"}><li><a href="#">Logout</a></li></Link>
            </ul>
        </div>
    </nav>

    <div className="hero-image1">
        <div className="hero-text">
            <h1>Rent Any Vehicle</h1>
            <p>Explore our wide range of vehicles for your next adventure</p>
            <Link to={"/booktwo"}><a href="#" class="cta-button">Two Wheeler</a>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to={"/bookfour"}><a href="#" class="cta-button">Four Wheeler</a></Link>
        </div>
    </div>

    <main className="main-content1">
        <div className="card-container1">
            <div className="card">
                <h2>Two Wheeler Rentals</h2>
                <p> Experience the thrill of the open road with our motorcycle rentals. Choose from various styles and models for your riding pleasure.</p>
               
                <Link to={"/booktwo"}><a href="#" className="btnu">Rent a Bike</a></Link>
            </div>
            <div className="card">
                <h2>Four Wheeler Rentals</h2>
                <p>Explore our wide range of cars for your next adventure. From compact cars to luxury sedans, we have the perfect vehicle for you.</p>
                <Link to={"/bookfour"}><a href="#" className="btnu">Rent a Car</a></Link>
            </div>
           
        </div>
    </main>

    <footer className="footer">
        <div className="footer-container">
            <p>&copy; 2023 Vehicle Rental System. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Userlanding