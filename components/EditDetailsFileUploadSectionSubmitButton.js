import React, { useState } from 'react';

const EditDetailsFileUploadSectionSubmitButton = ({ style }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/zip') {
      setSelectedFile(file);
    } else {
      alert('Please upload a ZIP file');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      alert('Please select a file first');
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // Handle task submission logic here
      console.log('Submitting task with file:', selectedFile);
    } else {
      alert('Please upload a file before submitting');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      minWidth: '900px',
      backgroundColor: '#d0bcff',
      borderRadius: '10px',
      padding: '20px',
      boxSizing: 'border-box',
      ...style
    }}>
      {/* Task Details Section */}
      <div style={{
        flexGrow: 1,
        marginRight: '20px'
      }}>
        <h2 style={{
          fontFamily: 'IBM Plex Sans',
          fontSize: '20.25px',
          fontWeight: 500,
          color: '#050f24',
          margin: '10px 0'
        }}>Task Details</h2>
        
        <div style={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          color: '#000000'
        }}>
          <p>Task Name : WP -1</p>
          <p>Submission Deadline : 15-03-2025</p>
          <p>File required type: ZIP</p>
        </div>

        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-cOh3n5m-GBkO8N/image-8.png"
          alt="Task Preview"
          style={{
            width: '273.78px',
            height: '154px',
            marginTop: '20px'
          }}
        />
      </div>

      {/* File Upload Section */}
      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <p style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e',
            marginBottom: '15px'
          }}>Upload ZIP file</p>

          <div style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e',
            marginBottom: '10px'
          }}>Task Upload File Type</div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            border: '1px solid #e1e1e1',
            borderRadius: '30px',
            padding: '12px 20px',
            marginBottom: '20px'
          }}>
            <span style={{ marginRight: '10px' }}>ZIP Format</span>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-cOh3n5m-GBkO8N/icon-use.png" alt="File icon" style={{ width: '16px', height: '16px' }} />
          </div>

          <button
            onClick={handleUpload}
            style={{
              width: '170px',
              height: '45px',
              backgroundColor: '#ff8e29',
              border: 'none',
              borderRadius: '30px',
              color: '#050f24',
              fontFamily: 'Poppins',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ff9f4d'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ff8e29'}
          >
            Upload File
          </button>
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: '170px',
            height: '45px',
            backgroundColor: '#ff8e29',
            border: 'none',
            borderRadius: '30px',
            color: '#050f24',
            fontFamily: 'Poppins',
            fontSize: '14px',
            alignSelf: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ff9f4d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ff8e29'}
        >
          Submit Task
        </button>

        <input
          type="file"
          accept=".zip"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="file-upload"
        />
      </div>
    </div>
  );
};

EditDetailsFileUploadSectionSubmitButton.defaultProps = {
  style: {}
};

export default EditDetailsFileUploadSectionSubmitButton;

