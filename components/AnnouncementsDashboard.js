import React from "react";
import { AnnouncementsTable } from "./AnnouncementsTable";
import { PaginationFooter } from "./PaginationFooter";

function AnnouncementsDashboard() {
  return (
    <section style={{
      width: '100%',
      padding: '30px',
      borderRadius: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 4px 0px rgba(255, 142, 41, 0.1)',
      zIndex: 2 // Ensure this section is on top
    }}>
      <h2 style={{
        fontFamily: 'IBM Plex Sans',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#050f24',
        marginBottom: '30px'
      }}>
        Latest Announcements
      </h2>
      <hr style={{
        border: 'none',
        borderBottom: '1px solid #e1e1e1',
        marginBottom: '28px'
      }} />
      <AnnouncementsTable />
      <PaginationFooter total={3} current={1} />
    </section>
  );
}

export default AnnouncementsDashboard;
