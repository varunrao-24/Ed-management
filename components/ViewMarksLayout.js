import React from 'react';
import Header2 from './Header2';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';
import Profile from './Profile';
import Dashboard from './Dashboard';
import SidebarLayout from './Sidebar/SidebarLayout';

const ViewMarksLayout = () => {
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
        <Dashboard title="View Marks" placeholder="Search..." />
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
          <Header2 />
          <TableHeader />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: '10px'
          }}>
            <TableRow index={1} subject="WP" task="WP-1" date="14-02-2025" marks="9" />
            <TableRow index={2} subject="WP" task="WP-2" date="20-02-2025" marks="9" />
            <TableRow index={3} subject="OS" task="OS-1" date="04-02-2025" marks="9" />
          </div>
          <Pagination currentPage={1} totalItems={3} itemsPerPage={3} />
        </div>
      </div>
    </div>
  );
};

export default ViewMarksLayout;
