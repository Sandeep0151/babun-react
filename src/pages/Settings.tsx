import React, { useEffect, useState } from 'react';

import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';

const Settings: React.FC = () => {

     const [loans, setloans] = useState([]);

    useEffect(() => {
        fetch('http://54.158.143.81/api/loan-application/')
            .then((response) => response.json())
            .then((data) => setloans(data))
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
                        <th>Amount</th>
                        <th>Need Time</th>
                        <th>Bank Type</th>
                        <th>Mobile</th>
                    </tr>
  </thead>
  <tbody>
{loans.map((loan: any) => (
                        <tr key={loan.id}>
                            <td>{loan.id}</td>
                            <td>{loan.name}</td>
                            <td>{loan.required_amount}</td>
                            <td>{loan.need_time}</td>
                            <td>{loan.bank_type}</td>
                            <td>{loan.mobile}</td>
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

export default Settings;
