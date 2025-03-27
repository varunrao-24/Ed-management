import React from 'react';

const Tasks = ({ title = 'Completed Tasks', percentage = '22%', increase = '8%' }) => {
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
      background: '#56e0ff',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: '32px',
      height: '32px',
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
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" 
          alt="Add User" 
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

export default Tasks; 
