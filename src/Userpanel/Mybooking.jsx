import React, { useEffect, useState } from 'react';
import './mybook.css';

function Mybooking() {
  const [twoWheelerBookings, setTwoWheelerBookings] = useState([]);
  const [fourWheelerBookings, setFourWheelerBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const [twoWheelerResponse, fourWheelerResponse] = await Promise.all([
          fetch('http://localhost/vechilebackend/controllers/api/User/Get/two.php'),
          fetch('http://localhost/vechilebackend/controllers/api/user/Get/four.php'),
        ]);

        const twoWheelerData = await twoWheelerResponse.json();
        const fourWheelerData = await fourWheelerResponse.json();

        setTwoWheelerBookings(twoWheelerData);
        setFourWheelerBookings(fourWheelerData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const renderTableRows = (bookings) => {
    if (bookings.length === 0) {
      return (
        <tr>
          <td colSpan="8">No bookings available</td>
        </tr>
      );
    }

    return bookings.map((booking, index) => (
      <tr key={index} className="vrs-table-row">
        <td className="vrs-table-cell" data-label="Name">{booking.name}</td>
        <td className="vrs-table-cell" data-label="Email">{booking.email}</td>
        <td className="vrs-table-cell" data-label="Phone">{booking.phone}</td>
        <td className="vrs-table-cell" data-label="Number of Days">{booking.number_of_days}</td>
        <td className="vrs-table-cell" data-label="Pickup Location">{booking.pickup_location}</td>
        <td className="vrs-table-cell" data-label="From Date">{booking.from_date}</td>
        <td className="vrs-table-cell" data-label="To Date">{booking.to_date}</td>
        <td className="vrs-table-cell" data-label="status">
          {booking.Status}{booking.status}
        </td>
      </tr>
    ));
  };

  return (
    <div className="main-mybook">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="vrs-container">
        <h1 className="vrs-heading">Two Wheeler Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Number of Days</th>
              <th className="vrs-table-cell">Pickup Location</th>
              <th className="vrs-table-cell">From Date</th>
              <th className="vrs-table-cell">To Date</th>
              <th className="vrs-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(twoWheelerBookings)}
          </tbody>
        </table>
      </div>

      <div className="vrs-container">
        <h1 className="vrs-heading">Four Wheeler Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Number of Days</th>
              <th className="vrs-table-cell">Pickup Location</th>
              <th className="vrs-table-cell">From Date</th>
              <th className="vrs-table-cell">To Date</th>
              <th className="vrs-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(fourWheelerBookings)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mybooking;


