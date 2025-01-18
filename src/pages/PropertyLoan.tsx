import React, { useEffect, useState } from 'react';

import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';

const Property: React.FC = () => {

     const [properties, setproperties] = useState([]);

    useEffect(() => {
        fetch('http://54.158.143.81/api/save-property-details/')
            .then((response) => response.json())
            .then((data) => setproperties(data))
            .catch((error) => console.error('Error fetching loans:', error));
    }, []);

  return (
    <div>
    <div style={styles.container}>
        <Sidebar />
        <div style={styles.mainContent}>
          <Header />
          <div style={styles.pageContent}>
            <table className="table">
  <thead>
<tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Budget</th>
                        <th>BHK</th>
                        <th>City</th>
                        <th>Property Name</th>
                        <th>Area Code</th>
                    </tr>
  </thead>
  <tbody>
{properties.map((property: any) => (
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.name}</td>
                            <td>{property.phone}</td>
                            <td>{property.email}</td>
                            <td>{property.budget}</td>
                            <td>{property.bhk}</td>
                            <td>{property.city}</td>
                            <td>{property.property_name}</td>
                            <td>{property.area_pin_code}</td>
                        </tr>
                    ))}
  </tbody>
</table>
    </div>
     </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  mainContent: {
    width: '100%',
    padding: '20px',
  },
  pageContent: {
    padding: '20px',
  },
};

export default Property;
