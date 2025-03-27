import React from 'react';

const Logo = ({ text = 'SkillUp' }) => {
  const logoContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4.29px',
    width: 'fit-content',
    height: '45px',
    minWidth: '131.29px',
  };

  const textStyle = {
    fontFamily: 'IBM Plex Sans',
    fontSize: '25.75px',
    fontWeight: 400,
    color: '#050f24',
  };

  const frameStyle = {
    position: 'relative',
    width: '45px',
    height: '45px',
  };

  const outerEllipseStyle = {
    position: 'absolute',
    width: '47.28px',
    height: '47.28px',
    border: '1.86px solid #050f24',
    borderRadius: '50%',
    top: '-1px',
    left: '-1.14px',
  };

  const innerEllipseStyle = {
    position: 'absolute',
    width: '45px',
    height: '45px',
    border: '1.86px solid #ff8e29',
    borderRadius: '50%',
    top: '0',
    left: '0',
  };

  const vectorStyle = {
    position: 'absolute',
    width: '7.59px',
    height: '20.67px',
    backgroundColor: '#ffb069',
    top: '9.3px',
    left: '3.92px',
  };

  const frame1Style = {
    position: 'absolute',
    width: '26.61px',
    height: '6.51px',
    top: '10.44px',
    left: '13.59px',
  };

  const frame5Style = {
    position: 'absolute',
    width: '27.61px',
    height: '7.39px',
    top: '18.31px',
    left: '8.73px',
  };

  const frame6Style = {
    position: 'absolute',
    width: '29.83px',
    height: '9.23px',
    top: '26.61px',
    left: '4.86px',
  };

  return (
    <div style={logoContainerStyle}>
      <div style={frameStyle}>
        <div style={outerEllipseStyle}></div>
        <div style={innerEllipseStyle}></div>
        <div style={vectorStyle}></div>
        <img src="https://dashboard.codeparrot.ai/api/image/Z-F37v8PKu40N2O5/frame-1.png" style={frame1Style} alt="frame-1" />
        <img src="https://dashboard.codeparrot.ai/api/image/Z-F37v8PKu40N2O5/frame-5.png" style={frame5Style} alt="frame-5" />
        <img src="https://dashboard.codeparrot.ai/api/image/Z-F37v8PKu40N2O5/frame-6.png" style={frame6Style} alt="frame-6" />
      </div>
      <span style={textStyle}>{text}</span>
    </div>
  );
};

export default Logo;

