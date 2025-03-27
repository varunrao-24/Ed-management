import React from 'react';

const Dashboard = ({ title = 'Dashboard', placeholder = 'Search...' }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '50px',
    padding: '10px',
  };

  const titleStyle = {
    fontFamily: 'IBM Plex Sans',
    fontSize: '20.25px',
    fontWeight: 500,
    color: '#050f24',
    margin: 0,
  };

  const searchContainerStyle = {
    position: 'relative',
    width: '330px',
  };

  const searchInputStyle = {
    width: '100%',
    height: '45px',
    padding: '12px 20px',
    borderRadius: '30px',
    border: '1px solid #e1e1e1',
    backgroundColor: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Poppins',
    color: '#6f757e',
    outline: 'none',
  };

  const searchIconStyle = {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '16px',
    cursor: 'pointer',
  };

  const handleSearchFocus = (e) => {
    e.target.style.borderColor = '#4a90e2';
  };

  const handleSearchBlur = (e) => {
    e.target.style.borderColor = '#e1e1e1';
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder={placeholder}
          style={searchInputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z-Gkc2s0ZhD5c3f9/icon-sea.png"
          alt="Search"
          style={searchIconStyle}
        />
      </div>
    </div>
  );
};

export default Dashboard;
