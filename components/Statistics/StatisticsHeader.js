import React from 'react';

const StatisticsHeader = ({ style }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '260px',
      width: '100%',
      height: '33px',
      ...style
    }}>
      <h2 style={{
        margin: 0,
        fontFamily: 'IBM Plex Sans',
        fontSize: '20.25px',
        fontWeight: 500,
        color: '#050f24'
      }}>
        Statistics (Task Completion)
      </h2>

      <button 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '13px',
          padding: '6px 16px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <span style={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 400,
          color: '#ff8e29',
        }}>
          Monthly
        </span>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-LjqAzgNnZiU9e8/icon-dow.png"
          alt="dropdown"
          style={{
            width: '10px',
            height: '10px',
          }}
        />
      </button>
    </div>
  );
};

StatisticsHeader.defaultProps = {
  style: {}
};

export default StatisticsHeader;

