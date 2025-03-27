import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarMenu = () => {
  const menuItems = [
    { icon: 'https://cdn-icons-png.flaticon.com/128/25/25694.png', text: 'Home', dropdown: true }, // New clearer home icon
    { icon: 'https://cdn-icons-png.flaticon.com/128/1087/1087840.png', text: 'Tasks', dropdown: true }, // Updated Tasks icon
    { icon: 'https://cdn-icons-png.flaticon.com/128/942/942799.png', text: 'View Marks', dropdown: true }, // Updated View Marks icon
    { icon: 'https://cdn-icons-png.flaticon.com/128/1827/1827292.png', text: 'Notifications', dropdown: false }, // No change needed
    { icon: 'https://cdn-icons-png.flaticon.com/128/857/857681.png', text: 'Announcements', dropdown: false }, // Updated Announcements icon
  ];

  return (
    <div>
      {menuItems.map((item, index) => (
        <SidebarMenuItem 
          key={index} 
          icon={item.icon} 
          text={item.text} 
          dropdown={item.dropdown} 
          textColor="black" // Ensure text is black
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
