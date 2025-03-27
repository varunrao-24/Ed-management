import React from 'react';
import StatisticsHeader from './StatisticsHeader';
import StatisticsChart from './StatisticsChart';

const StatisticsLayout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '840px',
      borderRadius: '20px',
      backgroundColor: '#ffffff',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <StatisticsHeader style={{ flexGrow: 1, width: '100%' }} />
      <StatisticsChart style={{ flexGrow: 1, width: '100%', marginTop: '20px' }} />
    </div>
  );
};

export default StatisticsLayout;
