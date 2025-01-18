import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.sidebarHeader}></h2>
      <ul style={styles.navList}>
        <li><Link to="/dashboard" style={styles.navLink}>Dashboard</Link></li>
        <li><Link to="/loan" style={styles.navLink}>Loan Applications</Link></li>
        <li><Link to="/property" style={styles.navLink}>Property Loan</Link></li>
        <li><Link to="/contact-us" style={styles.navLink}>Contactus</Link></li>
        <li><Link to="/credit-data" style={styles.navLink}>Credit Score</Link></li>

      </ul>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#2f3542',
    padding: '20px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column', // Correctly typed value
    alignItems: 'flex-start', // Correctly typed value
  },
  sidebarHeader: {
    color: '#fff',
    marginBottom: '20px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    display: 'block',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#3b4a60',
  },
};

export default Sidebar;
