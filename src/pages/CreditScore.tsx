import React, { useEffect, useState } from 'react';

import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';

const CreditScore: React.FC = () => {

     const [credits, setcredits] = useState([]);

    useEffect(() => {
        fetch('http://54.158.143.81/api/credit-score/')
            .then((response) => response.json())
            .then((data) => setcredits(data))
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
                        <th>PAN</th>
                        <th>DOB</th>

                    </tr>
  </thead>
  <tbody>
{credits.map((credit: any) => (
                        <tr key={credit.id}>
                            <td>{credit.id}</td>
                            <td>{credit.name}</td>
                            <td>{credit.mobile}</td>
                            <td>{credit.email}</td>
                            <td>{credit.pan}</td>
                            <td>{credit.dob}</td>

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

export default CreditScore;
