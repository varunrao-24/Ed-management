import React from 'react';
import EditSection from './EditSection';
import EditSelection from './EditSelection';
import EditDetailsFileUploadSectionSubmitButton from './EditDetailsFileUploadSectionSubmitButton.js';

const EditSubmissionLayout = () => {
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
      <EditSection style={{
        width: '100%',
        marginBottom: '20px',
      }} />
      <EditSelection style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '20px',
      }} />
      <EditDetailsFileUploadSectionSubmitButton style={{
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

export default EditSubmissionLayout;

