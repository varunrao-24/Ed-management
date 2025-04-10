import React from 'react';

const EditSection = ({ style }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      minWidth: '300px',
      padding: '20px',
      boxSizing: 'border-box',
      ...style
    }}>
      <h1 style={{
        margin: 0,
        fontFamily: 'IBM Plex Sans',
        fontSize: '20.25px',
        fontWeight: 'bold',
        color: '#050f24',
        marginBottom: '8px'
      }}>
        Edit Task
      </h1>
      <p style={{
        margin: 0,
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400,
        color: '#6f757e'
      }}>
        Edit your submitted task
      </p>
    </div>
  );
};

EditSection.defaultProps = {
  style: {}
};

export default EditSection;

