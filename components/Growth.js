import React from 'react';

const Growth = ({ year = '2025', percentage = 75, status = 'Submitted' }) => {
  return (
    <div style={{
      width: '260px',
      padding: '20px',
      background: '#FFFFFF',
      borderRadius: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          fontFamily: 'IBM Plex Sans',
          fontSize: '16px',
          fontWeight: 500,
          color: '#050F24'
        }}>
          Task Submissions
        </div>
        
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '13px',
          padding: '6px 16px',
          background: 'transparent',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            color: '#FF8E29',
            textAlign: 'center'
          }}>{year}</span>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z-MBHQzgNnZiU9fO/icon-dow.png"
            alt="down"
            style={{
              width: '10px',
              height: '10px'
            }}
          />
        </button>
      </div>

      <div style={{
        position: 'relative',
        width: '108.5px',
        height: '103.5px',
        margin: '0 auto'
      }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-MBHQzgNnZiU9fO/frame-63.png"
          alt="progress"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            color: '#050F24',
            textAlign: 'center'
          }}>{percentage}%</div>
          <div style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 400,
            color: '#6F757E',
            textAlign: 'center',
            marginTop: '5px'
          }}>{status}</div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
