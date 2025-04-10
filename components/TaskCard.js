import React from 'react';

const TaskCard = ({
  title,
  category,
  status,
  description,
  thumbnail,
  startDate,
  dueDate,
  isSubmitted,
  onSubmitTaskClick,
  showCheckMarks,
  onCheckMarksClick // Add this prop
}) => {
  const cardStyle = {
    width: '100%',
    maxWidth: '349px',
    minWidth: '300px',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    backgroundColor: isSubmitted ? '#27d095' : '#ff8e29',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 24px',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 400,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  };

  const checkMarksButtonStyle = {
    backgroundColor: '#34c759',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 24px',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 400,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  };

  const handleButtonClick = () => {
    onSubmitTaskClick();
  };

  return (
    <div style={cardStyle}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#050f24',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-b28wz4-w8v6RgX/image.png" alt="" style={{width: '20px', height: '20.59px'}} />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}>
            <span style={{
              fontFamily: 'IBM Plex Sans',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#050f24'
            }}>{title}</span>
            <div style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center'
            }}>
              <span style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 400,
                color: '#6f757e'
              }}>{category}</span>
              <span style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 400,
                color: isSubmitted ? '#34c759' : '#ff9500'
              }}>{status}</span>
            </div>
          </div>
        </div>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-b28wz4-w8v6RgX/iconmons.png" 
          alt="menu" 
          style={{
            width: '18px', 
            height: '18px',
            cursor: 'pointer'
          }} 
        />
      </div>

      <p style={{
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400,
        color: '#6f757e',
        margin: '0'
      }}>{description}</p>

      <img 
        src={thumbnail} 
        alt="project thumbnail" 
        style={{
          width: '100%',
          height: '154px',
          objectFit: 'cover',
          borderRadius: '5px'
        }}
      />

      <div style={{
        borderTop: '0.5px solid #e1e1e1',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#050f24'
          }}>{startDate}</span>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 400,
            color: '#6f757e'
          }}>Start Date</span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#050f24'
          }}>{dueDate}</span>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 400,
            color: '#6f757e'
          }}>Due Date</span>
        </div>

        <button style={buttonStyle}
          onMouseOver={(e) => e.target.style.opacity = '0.8'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
          onClick={handleButtonClick}
        >
          {isSubmitted ? 'Edit Submit' : 'Submit Task'}
        </button>
      </div>

      {showCheckMarks && (
        <button 
          style={checkMarksButtonStyle}
          onClick={onCheckMarksClick} // Add this line
        >
          Check Marks
        </button>
      )}
    </div>
  );
};

export default TaskCard;
