import React from 'react';

const TaskListHeader = ({ title = 'Assigned Tasks', subtitle = 'Currently Assigned tasks' }) => {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    minWidth: '300px',
    padding: '0',
    backgroundColor: 'inherit',
  };

  const titleStyle = {
    margin: '0',
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: '20.25px',
    fontWeight: 500,
    color: '#050f24',
    marginBottom: '8px',
  };

  const subtitleStyle = {
    margin: '0',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    color: '#6f757e',
  };

  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default TaskListHeader;

