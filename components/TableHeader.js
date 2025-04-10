import React from 'react';

const TableHeader = () => {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '10px',
    minWidth: '800px',
    height: '40px',
    backgroundColor: 'inherit',
    fontFamily: 'IBM Plex Sans',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#050f24'
  };

  const columnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center align the content
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  };

  const iconStyle = {
    width: '14px',
    height: '14px',
    marginLeft: '4px'
  };

  return (
    <div style={headerStyle}>
      <div style={{...columnStyle, width: '20%'}}
           onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
           onMouseOut={(e) => e.currentTarget.style.opacity = 1}>
        <span>Subject name</span>
      </div>
      
      <div style={{...columnStyle, width: '15%'}}
           onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
           onMouseOut={(e) => e.currentTarget.style.opacity = 1}>
        <span>Task</span>
        <img src="https://dashboard.codeparrot.ai/api/image/Z-r-6gz4-w8v6Rv5/icon-dow.png" alt="sort" style={iconStyle} />
      </div>
      
      <div style={{...columnStyle, width: '25%'}}
           onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
           onMouseOut={(e) => e.currentTarget.style.opacity = 1}>
        <span>Submission Time</span>
      </div>
      
      <div style={{...columnStyle, width: '15%'}}
           onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
           onMouseOut={(e) => e.currentTarget.style.opacity = 1}>
        <span>Marks</span>
      </div>
      
      <div style={{...columnStyle, width: '15%'}}
           onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
           onMouseOut={(e) => e.currentTarget.style.opacity = 1}>
        <span>Actions</span>
      </div>
    </div>
  );
};

export default TableHeader;
