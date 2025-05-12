import React from 'react'
import './Nav.css'
import { MdDashboard, MdTwoWheeler } from 'react-icons/md'
import {  FaBookmark, FaCar, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
function Navbar() {

  return (
    <>
<nav className="sidebar">
        <div className="logo">VehicleRental System</div>
        <div className="nav-links1">
            <Link to={"/dash"}><a href="#" ><MdDashboard /> Dashboard</a></Link>
            <Link to={"/two"}><a href="#"><MdTwoWheeler /> Two Wheelers</a></Link>
            <Link to={"/four"}><a href="#"><FaCar /> Four Wheelers</a>  </Link>
            <Link to={"/user"}><a href="#"><FaUserAlt />TwoWheeler Users</a></Link>
            <Link to={"/users"}><a href="#"><FaUserAlt />FourWheeler Users</a></Link>
          
            <Link to={"/logout"}><a href="#"><GrLogout />Logout</a></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar