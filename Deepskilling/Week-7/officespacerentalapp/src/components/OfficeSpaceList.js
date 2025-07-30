import React from 'react';

const OfficeSpaceList = () => {
  const heading = <h1 style={{ textAlign: 'center' }}>🏢 Office Space Rental App</h1>;

  const officeImage = "https://www.exisglobal.com/wp-content/uploads/2023/03/open-closed-office-space-pros-cons.jpg"; 

  const offices = [
    { name: "Tech Park", rent: 55000, address: "Bangalore" },
    { name: "Business Hub", rent: 75000, address: "Hyderabad" },
    { name: "Startup Space", rent: 45000, address: "Chennai" },
    { name: "Corporate Nest", rent: 80000, address: "Mumbai" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}

      <img
        src={officeImage}
        alt="Office"
        style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />

      <h2 style={{ marginTop: '20px' }}>Available Spaces:</h2>

      <ul>
        {offices.map((office, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>Name:</strong> {office.name}<br />
            <strong>Address:</strong> {office.address}<br />
            <strong style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              Rent: ₹{office.rent}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficeSpaceList;