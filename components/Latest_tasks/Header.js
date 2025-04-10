import React from 'react';

const Header = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between', // Align items to the ends
      alignItems: 'center',
      width: '100%',
      minWidth: '220px',
      height: '24px',
      padding: '0 10px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        margin: 0,
        fontFamily: 'IBM Plex Sans',
        fontSize: '16px',
        fontWeight: 500,
        color: '#050f24',
        flexGrow: 1, // Allows it to take full left space
        textAlign: 'left'
      }}>
        Latest Tasks
      </h1>
      <button 
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '18px',
          height: '18px',
          marginLeft: 'auto'
        }}
        onClick={() => {}}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-Ll-N4gt92eP1WL/iconmons.png"
          alt="Menu"
          style={{
            width: '18px',
            height: '18px'
          }}
        />
      </button>
    </div>
  );
};

export default Header;
