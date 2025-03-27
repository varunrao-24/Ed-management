import React from 'react';

const TaskCard = ({
  imageUrl = 'https://dashboard.codeparrot.ai/api/image/Z-RWUx_Ow-G566ms/image-8.png',
  status = 'Not Submitted',
  projectName = 'Todo List Website',
  projectType = 'WP - CSE',
  description = 'Design a responsive todo list website and share your source code in zip format.',
  startDate = '14-02-2025',
  dueDate = '15-03-2025',
  buttonText = status === 'Submitted' ? 'Edit Submit' : 'Submit Task',
}) => {
  const cardStyle = {
    width: '100%',
    maxWidth: '349px',
    minHeight: '441px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const projectInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const iconContainerStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#050f24',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const projectNameStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };

  const titleStyle = {
    fontFamily: 'IBM Plex Sans',
    fontSize: '16px',
    fontWeight: '500',
    color: '#050f24',
  };

  const subtitleStyle = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    color: '#6f757e',
  };

  const descriptionStyle = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    color: '#6f757e',
    lineHeight: '21px',
  };

  const statusStyle = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    color: status === 'Submitted' ? '#34c759' : '#ff9500',
  };

  const imageStyle = {
    width: '100%',
    height: '154px',
    objectFit: 'cover',
    borderRadius: '5px',
  };

  const dateContainerStyle = {
    display: 'flex',
    gap: '16px',
  };

  const dateBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };

  const dateLabelStyle = {
    fontFamily: 'Poppins',
    fontSize: '12px',
    color: '#6f757e',
  };

  const dateValueStyle = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    color: '#050f24',
  };

  const buttonStyle = {
    width: '100%',
    maxWidth: '106px',
    height: '45px',
    backgroundColor: status === 'Submitted' ? '#27d095' : '#ff8e29',
    borderRadius: '30px',
    border: 'none',
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    alignSelf: 'flex-end',
  };

  const menuIconStyle = {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={projectInfoStyle}>
          <div style={iconContainerStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-RWUx_Ow-G566ms/image.png" alt="Project Icon" width="20" height="20" />
          </div>
          <div style={projectNameStyle}>
            <div style={titleStyle}>{projectName}</div>
            <div style={subtitleStyle}>{projectType} <span style={statusStyle}>{status}</span></div>
          </div>
        </div>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-RWUx_Ow-G566ms/iconmons.png" 
          alt="Menu" 
          style={menuIconStyle}
          onMouseOver={(e) => e.target.style.opacity = '0.8'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        />
      </div>

      <div style={descriptionStyle}>
        {description}
      </div>

      <img src={imageUrl} alt="Task Preview" style={imageStyle} />

      <div style={dateContainerStyle}>
        <div style={dateBlockStyle}>
          <div style={dateLabelStyle}>Start Date</div>
          <div style={dateValueStyle}>{startDate}</div>
        </div>
        <div style={dateBlockStyle}>
          <div style={dateLabelStyle}>Due date</div>
          <div style={dateValueStyle}>{dueDate}</div>
        </div>
      </div>

      <button 
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.opacity = '0.9'}
        onMouseOut={(e) => e.target.style.opacity = '1'}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TaskCard;

