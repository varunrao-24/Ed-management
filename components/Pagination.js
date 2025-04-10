import React from 'react';

const Pagination = ({ currentPage = 1, totalItems = 3, itemsPerPage = 3, onPageChange = () => {} }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minWidth: '664px',
      height: '45px',
      padding: '0 20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: 400,
        color: '#6F757E'
      }}>
        Showing {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} marks
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '9px'
      }}>
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            color: '#6F757E',
            padding: '12px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1
          }}
        >
          Prev
        </button>

        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#FF8E29',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z-r-6gz4-w8v6Rv5/icon-one.png"
            alt="Current page"
            style={{
              width: '16px',
              height: '16px'
            }}
          />
        </div>

        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            color: '#FF8E29',
            padding: '12px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            opacity: currentPage === totalPages ? 0.5 : 1
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

