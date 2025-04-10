import React from 'react';

const TableRow = ({ index = 1, subject = "WP", task = "WP-1", date = "14-02-2025", marks = "9", onViewTask = () => {} }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      minWidth: '600px',
      padding: '10px 0',
      gap: '10px',
      backgroundColor: 'inherit'
    }}>
      <div style={{
        width: '30px',
        color: '#6F757E',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400
      }}>
        {index}
      </div>
      
      <div style={{
        width: '50px',
        color: '#6F757E',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400
      }}>
        {subject}
      </div>

      <div style={{
        width: '80px',
        color: '#6F757E',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400
      }}>
        {task}
      </div>

      <div style={{
        width: '100px',
        color: '#6F757E',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400
      }}>
        {date}
      </div>

      <div style={{
        width: '50px',
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        border: '1px solid #E1E1E1',
        borderRadius: '30px',
        color: '#6F757E',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400
      }}>
        {marks}
      </div>

      <button 
        onClick={onViewTask}
        style={{
          width: '100px',
          height: '29px',
          backgroundColor: '#5856D6',
          border: 'none',
          borderRadius: '30px',
          color: '#FFFFFF',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 400,
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#4644AC'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#5856D6'}
      >
        View Task
      </button>
    </div>
  );
};

export default TableRow;

