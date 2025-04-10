import React from 'react';

const Header2 = ({ title = 'View Marks', subtitle = 'View your all submitted and evaluated marks' }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      minWidth: '360px',
      backgroundColor: 'inherit',
      padding: '10px'
    }}>
      <h1 style={{
        margin: '0',
        padding: '0',
        fontFamily: 'IBM Plex Sans',
        fontSize: '20.25px',
        fontWeight: 'bold',
        color: '#050f24',
        marginBottom: '8px'
      }}>
        {title}
      </h1>
      <p style={{
        margin: '0',
        padding: '0',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400,
        color: '#6f757e'
      }}>
        {subtitle}
      </p>
    </div>
  );
};

export default Header2;
