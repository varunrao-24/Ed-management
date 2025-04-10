import React from 'react';
import SidebarLayout from './Sidebar/SidebarLayout';
import Dashboard from './Dashboard';
import Profile from './Profile';
import TaskSubmissionLayout from './TaskSubmissionLayout';

const SubmitTasksLayout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    }}>
      {/* Sidebar */}
      <div style={{
        flexShrink: 0,
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e1e1e1',
      }}>
        <SidebarLayout />
      </div>

      {/* Main Content */}
      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        {/* Dashboard and Profile */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}>
          <Dashboard title="Submit Task" placeholder="Search..." />
          <Profile />
        </div>

        {/* Task Submission Layout */}
        <TaskSubmissionLayout />
      </div>
    </div>
  );
};

export default SubmitTasksLayout;
