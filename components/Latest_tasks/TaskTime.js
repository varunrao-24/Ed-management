import React from 'react';

const TaskTime = ({ time = '11:10 am' }) => {
  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      color: '#6F757E',
      minWidth: '53px', // Adjusted to fit the widest text
      height: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 4px',
      boxSizing: 'border-box',
      userSelect: 'none',
      backgroundColor: 'inherit' // Inherit background color from parent
    }}>
      {time}
    </div>
  );
};

export default TaskTime;
