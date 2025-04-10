import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';
import SidebarLayout from './Sidebar/SidebarLayout';
import AnnouncementsDashboard from './AnnouncementsDashboard';

const AnnouncementsLayout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#00bfa6',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <SidebarLayout />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1 // Ensure this layout is on top
      }}>
        <Profile />
        <Dashboard title="Announcements" placeholder="Search..." />
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
          <AnnouncementsDashboard />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsLayout;
