import React from 'react';
import './App.css';

import officeImage1 from './office1.jpg';
import officeImage2 from './office2.jpeg';
import officeImage3 from './office3.jpg';

function App() {

  const officeList = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'Chennai',
      image: officeImage1 
    },
    {
      name: 'WeWork',
      rent: 75000,
      address: 'Bengaluru',
      image: officeImage2 
    },
    {
      name: 'Regus',
      rent: 58000,
      address: 'Mumbai',
      image: officeImage3 
    }
  ];

  const pageHeading = "Office Space, at Affordable Range";

  return (
    <div className="container">
      <h1>{pageHeading}</h1>
      <hr />
      {officeList.map((office, index) => {
        const rentStyle = {
          color: office.rent <= 60000 ? 'red' : 'green'
        };

        return (
          <div key={index} className="office-card">
            <img src={office.image} alt={`${office.name} Office Space`} className="office-image" />
            
            <div className="office-details">
              <p><b>Name:</b> {office.name}</p>
              <p style={rentStyle}>
                <b>Rent:</b> Rs. {office.rent}
              </p>
              <p><b>Address:</b> {office.address}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;


