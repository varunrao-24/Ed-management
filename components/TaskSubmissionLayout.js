import React from 'react';
import HeaderSection from './HeaderSection';
import CourseSelection from './CourseSelection';
import TaskDetailsFileUploadSectionSubmitButton from './TaskDetailsFileUploadSectionSubmitButton.js';

const TaskSubmissionLayout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1132px',
      margin: '0 auto',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <HeaderSection style={{
        width: '100%',
        marginBottom: '20px',
      }} />
      <CourseSelection style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '20px',
      }} />
      <TaskDetailsFileUploadSectionSubmitButton style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#e0d7ff',
        borderRadius: '10px',
        padding: '20px',
        boxSizing: 'border-box',
      }} />
    </div>
  );
};

export default TaskSubmissionLayout;

