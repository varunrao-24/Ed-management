import React from 'react';

const SidebarMenuItem = ({ icon, text, dropdown }) => {
  const containerStyle = {
    width: '100%',
    minWidth: '178px',
    height: '45px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  const frameStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '158px',
    height: '21px',
    gap: '10px',
  };

  const iconStyle = {
    width: '18px',
    height: '18px',
    objectFit: 'contain',
  };

  const textStyle = {
    marginLeft: '10px',
    fontFamily: 'IBM Plex Sans',
    fontSize: '16px',
    fontWeight: 500,
    color: '#050f24',
  };

  const dropdownIconStyle = {
    marginLeft: 'auto',
    width: '12px',
    height: '12px',
    objectFit: 'contain',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#ff7f29';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <div 
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={frameStyle}>
        <img 
          src={icon} 
          alt={`${text} Icon`} 
          style={iconStyle}
        />
        <span style={textStyle}>{text}</span>
        {dropdown && <svg style={dropdownIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
        </svg>
}
      </div>
    </div>
  );
};

export default SidebarMenuItem;

