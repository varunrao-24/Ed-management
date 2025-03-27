const StudentCard = ({
    name = "Student",
    role = "Student",
    email = "student@gmail.com",
    mobile = "+919999999999",
    age = "27",
    location = "India",
    description = "Student have privileges to view and submit tasks created by faculty.",
    profileImage = "https://dashboard.codeparrot.ai/api/image/Z-Qa9QzgNnZiU9kb/ellipse.png",
    onEditClick = () => {}
  }) => {
    const styles = {
      container: {
        width: '1132px',
        minHeight: '340px',
        padding: '30px',
        background: '#ffffff',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Poppins, sans-serif'
      },
      profileSection: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '30px',
        marginBottom: '30px'
      },
      profileImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover'
      },
      nameSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      },
      name: {
        margin: 0,
        fontFamily: 'IBM Plex Sans',
        fontSize: '22.78px',
        fontWeight: 700,
        color: '#050f24',
        lineHeight: '30px'
      },
      roleText: {
        margin: 0,
        fontFamily: 'IBM Plex Sans',
        fontSize: '16px',
        fontWeight: 500,
        color: '#6f757e',
        lineHeight: '21px'
      },
      description: {
        fontSize: '14px',
        color: '#6f757e',
        lineHeight: '21px',
        marginBottom: '50px',
        maxWidth: '476px'
      },
      infoSection: {
        display: 'flex',
        position: 'absolute',
        top: '30px',
        right: '30px',
        gap: '30px'
      },
      divider: {
        width: '1px',
        height: '285px',
        background: '#e1e1e1'
      },
      labels: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        color: '#050f24',
        fontSize: '14px',
        lineHeight: '21px'
      },
      values: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        color: '#6f757e',
        fontSize: '14px',
        lineHeight: '21px'
      },
      socialIcons: {
        display: 'flex',
        gap: '15px'
      },
      socialIcon: {
        width: '24px',
        height: '24px',
        cursor: 'pointer'
      },
      editButton: {
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        padding: '5px 22px',
        background: '#ff8e29',
        color: '#ffffff',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer',
        fontSize: '14px',
        fontFamily: 'Poppins',
        lineHeight: '21px',
        transition: 'opacity 0.2s ease'
      },
      editButtonHover: {
        opacity: 0.9
      }
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.profileSection}>
          <img src={profileImage} alt="Profile" style={styles.profileImage} />
          <div style={styles.nameSection}>
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.roleText}>Role : {role}</p>
          </div>
        </div>
        
        <p style={styles.description}>{description}</p>
  
        <div style={styles.infoSection}>
          <div style={styles.labels}>
            <span>Email:</span>
            <span>Mobile:</span>
            <span>Age:</span>
            <span>Location:</span>
            <span>Social:</span>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.values}>
            <span>{email}</span>
            <span>{mobile}</span>
            <span>{age}</span>
            <span>{location}</span>
            <div style={styles.socialIcons}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z-Qa9QzgNnZiU9kb/icon-fac.png" alt="Facebook" style={styles.socialIcon} />
              <img src="https://dashboard.codeparrot.ai/api/image/Z-Qa9QzgNnZiU9kb/iconmons.png" alt="Instagram" style={styles.socialIcon} />
              <img src="https://dashboard.codeparrot.ai/api/image/Z-Qa9QzgNnZiU9kb/icon-twi.png" alt="Twitter" style={styles.socialIcon} />
            </div>
          </div>
        </div>
        
        <button 
          style={styles.editButton}
          onMouseOver={(e) => {
            e.target.style.opacity = '0.9';
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = '1';
          }}
          onClick={onEditClick}
        >
          Edit info
        </button>
      </div>
      
    );
  };
  
  export default StudentCard;
  