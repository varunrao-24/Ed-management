import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';
import SidebarLayout from './Sidebar/SidebarLayout';
import NotificationsCard from './NotificationCard';

const NotificationsLayout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#00bfa6',
      overflow: 'hidden'
    }}>
      <SidebarLayout />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        <Profile />
        <Dashboard title="Notification" placeholder="Search..." />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          marginTop: '20px',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <NotificationsCard />
        </div>
      </div>
    </div>
  );
};

export default NotificationsLayout;
