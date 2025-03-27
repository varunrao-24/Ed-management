// src/components/MainLayout.js
import React from 'react';
import SidebarLayout from '../components/Sidebar/SidebarLayout';  // Go up one level
import Dashboard from './Dashboard';  // Current directory
import Profile from './Profile';  // Current directory
import AssignedTasksLayout from './AssignedTasksLayout';  // Current directory

const MainLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#00bfa6',
  };

  const mainContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '20px',
    position: 'relative',
  };

  return (
    <div style={layoutStyle}>
      <SidebarLayout />
      <div style={mainContentStyle}>
        <Dashboard title="Tasks" placeholder="Search..." />
        <AssignedTasksLayout />
        <Profile studentName="Student" />
      </div>
    </div>
  );
};

export default MainLayout;
