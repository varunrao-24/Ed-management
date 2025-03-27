import React from 'react';

const Ongoing = ({ title = 'Ongoing Tasks', percentage = '3', increase = '2%' }) => {
  const styles = {
    container: {
      width: '287px',
      padding: '20px',
      background: '#ffffff',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      width: '70px',
      height: '70px',
      background: '#ff8e29',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: '50px',
      height: '50px',
    },
    contentContainer: {
      marginLeft: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
    title: {
      fontFamily: 'IBM Plex Sans',
      fontSize: '16px',
      fontWeight: 500,
      color: '#050f24',
      margin: 0,
    },
    percentage: {
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontWeight: 400,
      color: '#6f757e',
      margin: '5px 0',
    },
    statsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    increaseIcon: {
      width: '18px',
      height: '18px',
    },
    increaseText: {
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontWeight: 400,
      color: '#ff8e29',
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        {/* Use local file from public folder */}
        <img 
          src="https://i.postimg.cc/yYqy8Ygm/assessment.png" 
          alt="Task Icon" 
          style={styles.icon}
        />
      </div>
      <div style={styles.contentContainer}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.percentage}>{percentage}</p>
        <div style={styles.statsContainer}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z-Gt3_8PKu40N2Pb/icon-inc.png" 
            alt="Increase" 
            style={styles.increaseIcon}
          />
          <p style={styles.increaseText}>{increase}</p>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
