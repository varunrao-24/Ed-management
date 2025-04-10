import React from 'react';
import Icon from './Icon';

const Header1 = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff'
  };

  const titleStyle = {
    fontSize: '20.25px',
    fontWeight: 500,
    color: '#050f24',
    marginLeft: '10px'
  };

  return (
    <div style={headerStyle}>
      <Icon />
      <div style={titleStyle}>Top Marks by Subjects</div>
    </div>
  );
};

export default Header1;

