import React from 'react';
import SidebarLayout from './Sidebar/SidebarLayout';
import Profile from './Profile';
import Dashboard from './Dashboard';
import AssignedTasksLayout from './AssignedTasksLayout';

const StdTasksLayout = () => {
  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh',
    backgroundColor: '#00bfa6',
    position: 'relative',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '30px',
    boxSizing: 'border-box',
    overflowY: 'auto',
  };

  return (
    <div style={mainContainerStyle}>
      <SidebarLayout />
      <div style={contentContainerStyle}>
        <Dashboard title="Tasks" placeholder="Search..." />
        <AssignedTasksLayout />
      </div>
      <Profile studentName="Student" />
    </div>
  );
};

export default StdTasksLayout;
