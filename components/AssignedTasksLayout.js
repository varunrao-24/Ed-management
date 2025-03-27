import React from 'react';
import TaskListHeader from './TaskListHeader';
import TaskCard from './TaskCard';

const AssignedTasksLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '1132px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
  };

  return (
    <div style={layoutStyle}>
      <TaskListHeader />
      <div style={cardsContainerStyle}>
        <TaskCard 
          imageUrl="https://dashboard.codeparrot.ai/api/image/Z-RWUx_Ow-G566ms/vector-1.png" 
          status="Not Submitted" 
          projectName="Todo List Website" 
          projectType="WP - CSE" 
          description="Design a responsive todo list website and share your source code in zip format." 
          startDate="14-02-2025" 
          dueDate="15-03-2025" 
        />
        <TaskCard 
          imageUrl="https://dashboard.codeparrot.ai/api/image/Z-RWUx_Ow-G566ms/vector-1-2.png" 
          status="Submitted" 
          projectName="Ecommerce Product Table" 
          projectType="WP - CSE" 
          description="Design a responsive products table using HTML with list of products and details." 
          startDate="15-02-2025" 
          dueDate="10-03-2025" 
        />
      </div>
    </div>
  );
};

export default AssignedTasksLayout;

