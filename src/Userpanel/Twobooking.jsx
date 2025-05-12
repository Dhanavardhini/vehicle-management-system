
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './fourbooking.css';

function Twobooking() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost/vechilebackend/controllers/api/User/Get/twoimage.php'); 
        setVehicles(response.data); 
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <>
      <p className="h1two">Two Wheelers</p>
      <div className="two-card">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <div className="vehicle-card" key={vehicle.id}>
              <img 
                src={`http://localhost/vechilebackend/controllers/api/User/upload/${vehicle.file}`} 
                width={400} 
                height={200} 
                className="vehicle-image1" 
                alt={vehicle.name} 
              />
              <div className="vehicle-details">
                <div className="vehicle-name">Vehicle name : {vehicle.name}</div>
                <div className="vehicle-price">Price : ₹ {vehicle.price}</div>
                <div className="vehicle-brand">Brand : {vehicle.brand}</div>
              </div>
              <Link to={{pathname: `/bookform/${vehicle.id}`,}}state={{ price: vehicle.price }} 
>
  <button className="view-button">Book</button>
</Link>

            </div>
          ))
        ) : (
          <p>Loading vehicles...</p>
        )}
      </div>
    </>
  );
}

export default Twobooking;

