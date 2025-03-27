import React from 'react';

const StatisticsChart = ({ style = {} }) => {
  // Sample data for the chart
  const monthlyData = [
    { month: 'Jan', value: 124, height: 124 },
    { month: 'Feb', value: 88, height: 88 },
    { month: 'Mar', value: 88, height: 88 },
    { month: 'Apr', value: 86, height: 86 },
    { month: 'May', value: 62, height: 62 },
    { month: 'Jun', value: 76, height: 76 },
    { month: 'Jul', value: 120, height: 120 },
    { month: 'Aug', value: 85, height: 85 }
  ];

  return (
    <div style={{
      ...style,
      minWidth: '666px',
      height: '274px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'inherit'
    }}>
      {/* Y-axis labels */}
      <div style={{
        position: 'absolute',
        left: '0',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '40px',
        paddingLeft: '10px'
      }}>
        {['500', '200', '100', '0'].map((value, index) => (
          <span key={index} style={{
            color: '#6F757E',
            fontSize: '12px',
            fontFamily: 'Poppins'
          }}>
            {value}
          </span>
        ))}
      </div>

      {/* Grid lines */}
      <div style={{
        flex: 1,
        marginLeft: '40px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '40px'
      }}>
        {[0, 1, 2, 3].map((_, index) => (
          <div key={index} style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E1E1E1'
          }} />
        ))}
      </div>

      {/* Chart bars */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '40px',
        right: '10px',
        height: 'calc(100% - 40px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}>
        {monthlyData.map((data, index) => (
          <div key={index} style={{
            width: '6px',
            height: `${data.height}px`,
            backgroundColor: '#FFBB7F',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#6F757E',
              fontSize: '12px',
              fontFamily: 'Poppins'
            }}>
              {data.month}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsChart;

