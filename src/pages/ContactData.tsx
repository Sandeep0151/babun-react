import React, { useEffect, useState } from 'react';

import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';

const Contact: React.FC = () => {

     const [contacts, setcontacts] = useState([]);

    useEffect(() => {
        fetch('http://54.158.143.81/api/contact/')
            .then((response) => response.json())
            .then((data) => setcontacts(data))
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
                        <th>Email</th>
                        <th>Message</th>


                    </tr>
  </thead>
  <tbody>
{contacts.map((contact: any) => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>

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

export default Contact;
