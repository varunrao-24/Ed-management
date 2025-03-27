import React from 'react';

const SidebarMenu_LogoutButton = ({ onClick }) => {
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
    color: '#FF8E29',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#fae2cf';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <div 
      style={containerStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={frameStyle}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-F37v8PKu40N2O5/icon-log.png" 
          alt="Logout Icon" 
          style={iconStyle}
        />
        <span style={textStyle}>Logout</span>
      </div>
    </div>
  );
};

SidebarMenu_LogoutButton.defaultProps = {
  onClick: () => console.log('Logout clicked'),
};

export default SidebarMenu_LogoutButton;

