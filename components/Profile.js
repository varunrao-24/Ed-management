import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ studentName = "Student", profileImage = "https://dashboard.codeparrot.ai/api/image/Z-Gnif8PKu40N2PZ/ellipse.png" }) => {
  const navigate = useNavigate();

  const containerStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const profileImageStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const studentNameStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    color: '#050f24',
    margin: '0',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div 
      style={containerStyle}
      onClick={handleClick}
    >
      <img 
        src={profileImage} 
        alt="Profile" 
        style={profileImageStyle}
      />
      <span style={studentNameStyle}>{studentName}</span>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z-Gnif8PKu40N2PZ/icon-dow.png" 
        alt="Dropdown" 
        className="dropdown-icon"
        style={iconStyle}
      />
    </div>
  );
};

export default Profile;
