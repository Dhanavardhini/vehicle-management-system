
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import axios from 'axios';

export default function Dashboard() {
    const [twoWheelers, setTwoWheelers] = useState(0);
    const [fourWheelers, setFourWheelers] = useState(0);

   
    useEffect(() => {
     
        axios.get('http://localhost/vechilebackend/controllers/api/User/Get/two.php')
            .then(response => {
                console.log('Two Wheelers Response:', response.data);
                const count=response.data.length
                    setTwoWheelers(count); 
                  
            })
            .catch(error => {
                console.error('Error fetching two-wheelers data:', error);
            });

     
        axios.get('http://localhost/vechilebackend/controllers/api/User/Get/four.php')
            .then(response => {
                console.log('Four Wheelers Response:', response.data);
                const count=response.data.length
                 setFourWheelers(count)
                 
            })
            .catch(error => {
                console.error('Error fetching four-wheelers data:', error);
            });
    }, []); 

    return (
        <>
            <main className="main-content">
                <div className="container">
                    <section className="summary-cards">
                        <div className="card1">
                            <h2>Two Wheelers Details</h2>
                            <p><FaAngleDoubleDown /></p>
                        </div>
                        <div className="card1">
                            <h2>Four Wheelers Details</h2>
                            <p><FaAngleDoubleDown /></p>
                        </div>

                        <div className="card2">
                            <h3>Total Two Wheelers Bookings</h3>
                            <p>{twoWheelers}</p> 
                        </div>
                        <div className="card2">
                            <h3>Total Four Wheelers Bookings</h3>
                            <p>{fourWheelers}</p> 
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
