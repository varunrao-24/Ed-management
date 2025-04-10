import React from 'react';
import TaskCard from './TaskCard';
import { useNavigate } from 'react-router-dom';

const AssignedTasksLayout = () => {
  const navigate = useNavigate();

  const handleSubmitTaskClick = () => {
    navigate('/submit-task');
  };

  const handleEditTaskClick = () => {
    navigate('/edit-submit');
  };

  const handleCheckMarksClick = () => {
    navigate('/view-marks');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      width: '1132px',
      height: 'auto',
    }}>
      <h1 style={{
        fontFamily: 'IBM Plex Sans',
        fontWeight: 500,
        fontSize: '20.25px',
        color: '#050f24',
        marginBottom: '10px',
      }}>Assigned Tasks</h1>
      <p style={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '14px',
        color: '#6f757e',
        marginBottom: '20px',
      }}>Currently Assigned tasks</p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        width: '100%',
      }}>
        <TaskCard 
          title="Todo List Website"
          category="WP - CSE"
          status="Not Submitted"
          description="Design a responsive todo list website and share your source code in zip format."
          thumbnail="https://dashboard.codeparrot.ai/api/image/Z-b28wz4-w8v6RgX/image-8.png"
          startDate="14-02-2025"
          dueDate="15-03-2025"
          isSubmitted={false}
          onSubmitTaskClick={handleSubmitTaskClick}
          showCheckMarks={false}
        />
        <TaskCard 
          title="Ecommerce Product Table"
          category="WP - CSE"
          status="Submitted"
          description="Design a responsive products table using HTML with list of products and details."
          thumbnail="https://dashboard.codeparrot.ai/api/image/Z-b28wz4-w8v6RgX/image-9.png"
          startDate="15-02-2025"
          dueDate="10-03-2025"
          isSubmitted={true}
          onSubmitTaskClick={handleEditTaskClick}
          showCheckMarks={true}
          onCheckMarksClick={handleCheckMarksClick} // Add this line
        />
      </div>
    </div>
  );
};

export default AssignedTasksLayout;
