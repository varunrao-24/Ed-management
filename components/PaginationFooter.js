import React from "react";

export function PaginationFooter({ total, current }) {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '48px'
    }}>
      <p style={{
        fontFamily: 'Poppins',
        fontSize: '12px',
        color: '#6f757e',
        marginBottom: '0'
      }}>
        Showing {total} of {total} Announcements
      </p>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
        <button style={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          color: '#6f757e',
          background: 'none',
          border: 'none',
          padding: '0',
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
          Prev
        </button>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '9999px',
          backgroundColor: '#ff8e29',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins'
        }}>
          {current}
        </div>
        <button style={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          color: '#ff8e29',
          background: 'none',
          border: 'none',
          padding: '0',
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
          Next
        </button>
      </nav>
    </footer>
  );
}
