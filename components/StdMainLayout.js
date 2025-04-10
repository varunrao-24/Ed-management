// import React from 'react';
// import SidebarLayout from './Sidebar/SidebarLayout';
// import Dashboard from './Dashboard';
// import Profile from './Profile';
// import StudentCard from './StudentCard';
// import AccountSettings from './AccountSettings';
// import Application from './Application';
// const StdMainLayout = () => {
//   const layoutStyle = {
//     display: 'flex',
//     height: '100vh',
//     backgroundColor: '#00bfa6',
//     padding: '20px',
//     boxSizing: 'border-box',
//   };

//   const contentStyle = {
//     flexGrow: 1,
//     marginLeft: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   };

//   const notificationSettingsStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   };

//   const notificationTitleStyle = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#050f24',
//     marginBottom: '10px',
//     fontFamily: 'IBM Plex Sans, sans-serif',
//   };

//   const settingsContainerStyle = {
//     display: 'flex',
//     gap: '20px',
//   };

//   return (
//     <div style={layoutStyle}>
//       <SidebarLayout />
//       <div style={contentStyle}>
//         <Dashboard title="Profile" />
//         <Profile />
//         <StudentCard />
//         <div style={notificationSettingsStyle}>
//           <h2 style={notificationTitleStyle}>Notification Settings</h2>
//           <div style={settingsContainerStyle}>
//             <AccountSettings />
//             <Application />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StdMainLayout;


import React from 'react';
import SidebarLayout from './Sidebar/SidebarLayout';
import Dashboard from './Dashboard';
import Profile from './Profile';
import StudentCard from './StudentCard';
import AccountSettings from './AccountSettings';
import Application from './Application';

const StdMainLayout = () => {
  const layoutStyle = {
    display: 'flex',
    minHeight: '100vh', // Ensure the layout takes full height
    backgroundColor: '#00bfa6',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'auto', // Handle overflow
  };

  const contentStyle = {
    flexGrow: 1,
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingBottom: '20px', // Add padding to prevent collapse
  };

  const notificationSettingsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const notificationTitleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#050f24',
    marginBottom: '10px',
    fontFamily: 'IBM Plex Sans, sans-serif',
  };

  const settingsContainerStyle = {
    display: 'flex',
    gap: '20px',
  };

  return (
    <div style={layoutStyle}>
      <SidebarLayout />
      <div style={contentStyle}>
        <Dashboard title="Profile" />
        <Profile />
        <StudentCard />
        <div style={notificationSettingsStyle}>
          <h2 style={notificationTitleStyle}>Notification Settings</h2>
          <div style={settingsContainerStyle}>
            <AccountSettings />
            <Application />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StdMainLayout;
