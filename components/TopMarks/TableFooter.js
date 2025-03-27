// import React from 'react';

// const TableFooter = () => {
//   const footerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '16px 20px',
//     minWidth: '840px',
//     backgroundColor: 'inherit',
//     color: '#6f757e',
//     fontSize: '14px',
//     fontFamily: 'Poppins, sans-serif',
//     fontWeight: 400,
//   };

//   const cellStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     flex: '1',
//     textAlign: 'center'
//   };

//   return (
//     <div style={footerStyle}>
//       <div style={cellStyle}>6</div>
//       <div style={cellStyle}>DSA</div>
//       <div style={cellStyle}>DSA-1</div>
//       <div style={cellStyle}>92</div>
//       <div style={cellStyle}>28-02-2025</div>
//     </div>
//   );
// };

// export default TableFooter;

import React from 'react';

const TableFooter = () => {
  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '2px 10px',
    minHeight: '25px',
    width: '100%',
    backgroundColor: 'inherit',
    borderBottom: '1px solid #e1e1e1',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    color: '#6f757e'
  };

  const cellStyle = {
    width: '100px',
    textAlign: 'center'
  };

  const dateStyle = {
    flexGrow: 1,
    textAlign: 'center'
  };

  return (
    <div style={footerStyle}>
      <div style={cellStyle}>6</div>
      <div style={cellStyle}>DSA</div>
      <div style={cellStyle}>DSA-1</div>
      <div style={cellStyle}>92</div>
      <div style={dateStyle}>28-02-2025</div>
    </div>
  );
};

export default TableFooter;
