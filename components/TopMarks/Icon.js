import React from 'react';

const Icon = () => {
  const iconStyle = {
    width: '34px',
    height: '35px',
    minWidth: '34px', // Ensure icon maintains aspect ratio
    backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z-L2_N4gt92eP1WY/image-1.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center'
  };

  return <div style={iconStyle} />;
};

export default Icon;

