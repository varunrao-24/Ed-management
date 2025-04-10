// import React from 'react';

// const TableRow = ({ index = 1, subject = 'WP', code = 'WP-1', marks = 98, date = '28-02-2025' }) => {
//   const rowStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '2px 10px',
//     minHeight: '25px',
//     width: '100%',
//     backgroundColor: 'inherit',
//     borderBottom: '1px solid #e1e1e1',
//     fontFamily: 'Poppins, sans-serif',
//     fontSize: '14px',
//     color: '#6f757e'
//   };

//   const indexStyle = {
//     width: '30px',
//     textAlign: 'center'
//   };

//   const subjectStyle = {
//     width: '100px',
//     textAlign: 'center'
//   };

//   const codeStyle = {
//     width: '100px',
//     textAlign: 'center'
//   };

//   const marksStyle = {
//     width: '50px',
//     textAlign: 'center'
//   };

//   const dateStyle = {
//     flexGrow: 1,
//     textAlign: 'center'
//   };

//   return (
//     <div style={rowStyle}>
//       <div style={indexStyle}>{index}</div>
//       <div style={subjectStyle}>{subject}</div>
//       <div style={codeStyle}>{code}</div>
//       <div style={marksStyle}>{marks}</div>
//       <div style={dateStyle}>{date}</div>
//     </div>
//   );
// };

// export default TableRow;

import React from 'react';

const TableRow = ({ index, subject, code, marks, date }) => {
  const rowStyle = {
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
    <div style={rowStyle}>
      <div style={cellStyle}>{index}</div>
      <div style={cellStyle}>{subject}</div>
      <div style={cellStyle}>{code}</div>
      <div style={cellStyle}>{marks}</div>
      <div style={dateStyle}>{date}</div>
    </div>
  );
};

export default TableRow;
