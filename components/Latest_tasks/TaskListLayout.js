import React from 'react';
import Header from './Header';
import TaskItem from './TaskItem';

const TaskListLayout = () => {
  const taskItems = [
    { id: 1, icon: 'https://i.postimg.cc/P58xrZcy/Screenshot-2025-03-25-230717.png', info: 'WP-1\nFaculty 1', time: '11:10 am' },
    { id: 2, icon: 'https://i.postimg.cc/P58xrZcy/Screenshot-2025-03-25-230717.png', info: 'WP-2\nFaculty 1', time: '11:05 am' },
    { id: 3, icon: 'https://i.postimg.cc/P58xrZcy/Screenshot-2025-03-25-230717.pngg', info: 'DBMS-1\nFaculty 2', time: '9:08 am' },
    { id: 4, icon: 'https://i.postimg.cc/P58xrZcy/Screenshot-2025-03-25-230717.png', info: 'OS-1\nFaculty 3', time: '7:30 am' },
    { id: 5, icon: 'https://i.postimg.cc/P58xrZcy/Screenshot-2025-03-25-230717.png', info: 'OS-2\nFaculty 3', time: '7:22 am' },
  ];

  return (
    <div style={{
      width: '260px',
      borderRadius: '20px',
      backgroundColor: '#ffffff',
      padding: '20px',
      boxSizing: 'border-box',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '20px',
      }}>
        {taskItems.map(task => (
          <TaskItem key={task.id} icon={task.icon} info={task.info} time={task.time} />
        ))}
      </div>
    </div>
  );
};

export default TaskListLayout;

