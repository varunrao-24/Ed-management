"use client";
import React from "react";
import { NotificationItem } from "./NotificationItem";

export function NotificationList() {
  const notifications = [
    "You are added in WP Subject under Faculty 1",
    "New Task/Assignment WP-1 by Faculty 1",
    "You are added in OS Subject under Faculty 2",
    "New Task/Assignment OS-1 by Faculty 2",
  ];

  return (
    <ul style={{
      listStyleType: 'none',
      margin: '0',
      padding: '0',
      paddingLeft: '20px' // Add padding for indentation
    }}>
      {notifications.map((notification, index) => (
        <NotificationItem key={index} text={notification} />
      ))}
    </ul>
  );
}
