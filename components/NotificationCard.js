"use client";
import React from "react";
import { NotificationList } from "./NotificationList";
import { Divider } from "./Divider";

function NotificationsCard() {
  return (
    <section
      className="card rounded-4 shadow-sm p-4 p-sm-5"
      style={{ width: "840px", maxWidth: "100%", minHeight: "377px" }}
    >
      <h2
        className="fw-medium mb-4"
        style={{
          color: "#050f24",
          fontFamily: '"IBM Plex Sans", sans-serif',
          fontSize: "20px",
        }}
      >
        Latest Notifications
      </h2>
      <Divider />
      <NotificationList />
    </section>
  );
}

export default NotificationsCard;
