import React, { useState } from 'react';

const AccountSettings = () => {
  // State for toggle switches
  const [notifications, setNotifications] = useState({
    notSubmitted: false,
    taskAdded: true,
    deadlineReminder: true
  });

  // Toggle handler
  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const containerStyle = {
    width: '370px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    fontFamily: 'IBM Plex Sans, sans-serif',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#050f24',
    marginBottom: '20px',
  };

  const notificationItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    cursor: 'pointer',
  };

  const textStyle = {
    marginLeft: '20px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    color: '#050f24',
  };

  const inactiveTextStyle = {
    ...textStyle,
    color: '#6f757e',
  };

  const toggleIconStyle = {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Account</h2>
      
      <div>
        <div 
          style={notificationItemStyle}
          onClick={() => handleToggle('notSubmitted')}
        >
          <img 
            src={notifications.notSubmitted ? "https://dashboard.codeparrot.ai/api/image/Z-QcmwzgNnZiU9kd/icon-on.png" : "https://dashboard.codeparrot.ai/api/image/Z-QcmwzgNnZiU9kd/icon-off.png"}
            alt="toggle"
            style={toggleIconStyle}
          />
          <span style={inactiveTextStyle}>
            Email me when someone not submitted task
          </span>
        </div>

        <div 
          style={notificationItemStyle}
          onClick={() => handleToggle('taskAdded')}
        >
          <img 
            src={notifications.taskAdded ? "https://dashboard.codeparrot.ai/api/image/Z-QcmwzgNnZiU9kd/icon-on.png" : "https://dashboard.codeparrot.ai/api/image/Z-QcmwzgNnZiU9kd/icon-off.png"}
            alt="toggle"
            style={toggleIconStyle}
          />
          <span style={textStyle}>
            Email me when someone added task
          </span>
        </div>

        <div 
          style={notificationItemStyle}
          onClick={() => handleToggle('deadlineReminder')}
        >
          <img 
            src={notifications.deadlineReminder ? "https://dashboard.codeparrot.ai/api/image/Z-QcmwzgNnZiU9kd/icon-on-2.png" : "https://dashboard.codeparrot.ai/api/image/Z-QcmwzgNnZiU9kd/icon-off.png"}
            alt="toggle"
            style={toggleIconStyle}
          />
          <span style={textStyle}>
            Email me 3 days before deadline of the task.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

