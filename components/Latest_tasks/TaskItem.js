import React from 'react';
import TaskIcon from './TaskIcon';

const TaskItem = ({ icon, info, time }) => {
  const [title, subtitle] = info.split('\n');
  return (
    <div style={{
      width: '100%',
      maxWidth: '220px',
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <TaskIcon icon={icon} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          marginLeft: '10px'
        }}>
          <span style={{
            color: '#6f757e',
            fontSize: '12px',
            fontFamily: 'Poppins',
            fontWeight: 400
          }}>
            {title}
          </span>
          <span style={{
            color: '#050f24',
            fontSize: '14px',
            fontFamily: 'Poppins',
            fontWeight: 400
          }}>
            {subtitle}
          </span>
        </div>
      </div>
      <span style={{
        color: '#6f757e',
        fontSize: '12px',
        fontFamily: 'Poppins',
        fontWeight: 400
      }}>
        {time}
      </span>
    </div>
  );
};

export default TaskItem;

