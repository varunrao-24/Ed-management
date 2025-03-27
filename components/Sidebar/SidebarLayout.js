import React from 'react';
import Logo from './Logo';
import SidebarMenu from './SidebarMenu';
import SidebarMenu_LogoutButton from './SidebarMenu_LogoutButton';

const SidebarLayout = () => {
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '218px',
    height: '100vh',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4.29px',
    marginBottom: '54px',
  };

  const menuStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: 'auto',
  };

  const logoutStyle = {
    marginTop: 'auto',
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        <Logo />
      </div>
      <div style={menuStyle}>
        <SidebarMenu />
      </div>
      <div style={logoutStyle}>
        <SidebarMenu_LogoutButton />
      </div>
    </div>
  );
};

export default SidebarLayout;

