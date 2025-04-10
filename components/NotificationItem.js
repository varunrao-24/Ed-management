"use client";
import React from "react";

export function NotificationItem({ text }) {
  return (
    <li
      style={{
        marginTop: '16px', // Add margin for spacing between items
        paddingLeft: '20px', // Add padding for indentation
        color: "#050f24", // Match color to design
        fontFamily: '"Poppins", sans-serif',
        fontSize: "14px",
        fontWeight: "400",
        listStyleType: 'disc', // Add bullet points
      }}
    >
      {text}
    </li>
  );
}
