import React, { useState } from 'react';

const EditSelection = ({ style = {} }) => {
  const [selectedCourse, setSelectedCourse] = useState('WP');
  const [selectedTask, setSelectedTask] = useState('WP-1');
  const [isDropdownOpenCourse, setIsDropdownOpenCourse] = useState(false);
  const [isDropdownOpenTask, setIsDropdownOpenTask] = useState(false);

  const courses = ['WP', 'Java', 'Python', 'React'];
  const tasks = ['WP-1', 'WP-2', 'WP-3', 'WP-4'];

  const dropdownStyles = {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    border: '1px solid #e1e1e1',
    marginTop: '4px',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const optionStyles = {
    padding: '10px 20px',
    cursor: 'pointer',
    fontFamily: 'Poppins',
    fontSize: '14px',
    color: '#050f24',
    ':hover': {
      backgroundColor: '#e1e1e1',
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      minWidth: '700px',
      flexWrap: 'wrap',
      ...style
    }}>
      <div style={{ position: 'relative', width: '330px', marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '10px',
          color: '#6f757e',
          fontFamily: 'Poppins',
          fontSize: '14px',
        }}>
          Select Course/Subject
        </label>
        <div
          onClick={() => setIsDropdownOpenCourse(!isDropdownOpenCourse)}
          style={{
            width: '100%',
            height: '45px',
            backgroundColor: '#f5f5f5',
            borderRadius: '30px',
            border: '1px solid #e1e1e1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            cursor: 'pointer',
          }}
        >
          <span style={{
            color: '#050f24',
            fontFamily: 'Poppins',
            fontSize: '14px',
          }}>
            {selectedCourse}
          </span>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z-cOh3n5m-GBkO8N/icon-dow.png" 
            alt="dropdown"
            style={{
              width: '14px',
              height: '14px',
              transform: isDropdownOpenCourse ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }}
          />
        </div>
        {isDropdownOpenCourse && (
          <div style={dropdownStyles}>
            {courses.map((course) => (
              <div
                key={course}
                onClick={() => {
                  setSelectedCourse(course);
                  setIsDropdownOpenCourse(false);
                }}
                style={optionStyles}
              >
                {course}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ position: 'relative', width: '330px', marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '10px',
          color: '#6f757e',
          fontFamily: 'Poppins',
          fontSize: '14px',
        }}>
          Select Task
        </label>
        <div
          onClick={() => setIsDropdownOpenTask(!isDropdownOpenTask)}
          style={{
            width: '100%',
            height: '45px',
            backgroundColor: '#f5f5f5',
            borderRadius: '30px',
            border: '1px solid #e1e1e1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            cursor: 'pointer',
          }}
        >
          <span style={{
            color: '#050f24',
            fontFamily: 'Poppins',
            fontSize: '14px',
          }}>
            {selectedTask}
          </span>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z-cOh3n5m-GBkO8N/icon-dow.png" 
            alt="dropdown"
            style={{
              width: '14px',
              height: '14px',
              transform: isDropdownOpenTask ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }}
          />
        </div>
        {isDropdownOpenTask && (
          <div style={dropdownStyles}>
            {tasks.map((task) => (
              <div
                key={task}
                onClick={() => {
                  setSelectedTask(task);
                  setIsDropdownOpenTask(false);
                }}
                style={optionStyles}
              >
                {task}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditSelection;

