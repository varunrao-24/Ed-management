import React from 'react';

const TaskIcon = ({ icon }) => (
  <div style={{
    width: '40px',
    height: '40px',
    backgroundColor: '#27d095',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden' // Ensure the image doesn't overflow the container
  }}>
    <img 
      src={icon} 
      alt="Task Icon"
      style={{
        width: '100%', // Make the image cover the entire width
        height: '100%', // Make the image cover the entire height
        objectFit: 'cover' // Ensure the image covers the container
      }}
    />
  </div>
);

export default TaskIcon;
