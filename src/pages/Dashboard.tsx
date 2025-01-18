import React from 'react';
import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';

const Dashboard: React.FC = () => {
  return (
    <div>
    <div style={styles.container}>
        <Sidebar />
        <div style={styles.mainContent}>
          <Header />
          <div style={styles.pageContent}>
         <h3>Dashboard</h3>
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


export default Dashboard;
