

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./bookform.css";

function BookForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    number_of_days: "",
    pickup_location: "",
    from_date: "",
    to_date: "",
    price: 0, 
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { price = 0 } = location.state || {}; 

  
  useEffect(() => {
    console.log("price:", price);
    console.log("number_of_days:", formData.number_of_days);

    if (formData.number_of_days && price) {
      const calculatedPrice = Number(formData.number_of_days) * price;
      setFormData((prevData) => ({
        ...prevData,
        price: calculatedPrice, 
      }));
    }
  }, [formData.number_of_days, price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/vechilebackend/controllers/api/User/post/twowheelerbook.php",
        formData, 
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data.message);
      alert("Plan Added successfully");
      navigate("/booktwo");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div className="vr-body">
      <div className="vr-container">
        <h1 className="vr-title">Booking Form</h1>
        <form className="vr-form" onSubmit={handleSubmit}>
          <div className="vr-form-group">
            <label className="vr-label">Name:</label>
            <input
              className="vr-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Email:</label>
            <input
              className="vr-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Phone Number:</label>
            <input
              className="vr-input"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Number of Days:</label>
            <input
              className="vr-input"
              type="number"
              name="number_of_days"
              value={formData.number_of_days}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Pickup Location:</label>
            <input
              className="vr-input"
              type="text"
              name="pickup_location"
              value={formData.pickup_location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">From Date:</label>
            <input
              className="vr-input"
              type="date"
              name="from_date"
              value={formData.from_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">To Date:</label>
            <input
              className="vr-input"
              type="date"
              name="to_date"
              value={formData.to_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Calculated Price:</label>
            <input
              className="vr-input"
              type="text"
              value={formData.price || "N/A"}
              disabled
            />
          </div>
          <button className="vr-submit-btn" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;

