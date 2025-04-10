import React, { useState } from 'react';

const Application = ({ defaultSubscriptions = { announcements: false, emails: true } }) => {
  const [subscriptions, setSubscriptions] = useState(defaultSubscriptions);

  const toggleSubscription = (type) => {
    setSubscriptions(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const containerStyle = {
    width: '357px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    fontFamily: 'IBM Plex Sans, sans-serif',
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#050f24',
    marginBottom: '34px',
  };

  const subscriptionContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const subscriptionItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    cursor: 'pointer',
    padding: '8px 0',
  };

  const textStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Application</div>
      
      <div style={subscriptionContainerStyle}>
        <div 
          style={subscriptionItemStyle}
          onClick={() => toggleSubscription('announcements')}
        >
          <img 
            src={subscriptions.announcements ? 'https://dashboard.codeparrot.ai/api/image/Z-QyigggqYBhYb09/icon-on.png' : 'https://dashboard.codeparrot.ai/api/image/Z-QyigggqYBhYb09/icon-off.png'} 
            alt="toggle"
            style={iconStyle}
          />
          <span style={{...textStyle, color: '#6f757e'}}>
            Subscribe to Annoucements
          </span>
        </div>

        <div 
          style={subscriptionItemStyle}
          onClick={() => toggleSubscription('emails')}
        >
          <img 
            src={subscriptions.emails ? 'https://dashboard.codeparrot.ai/api/image/Z-QyigggqYBhYb09/icon-on.png' : 'https://dashboard.codeparrot.ai/api/image/Z-QyigggqYBhYb09/icon-off.png'} 
            alt="toggle"
            style={iconStyle}
          />
          <span style={{...textStyle, color: '#050f24'}}>
            Subscribe to emails
          </span>
        </div>
      </div>
    </div>
  );
};

export default Application;

