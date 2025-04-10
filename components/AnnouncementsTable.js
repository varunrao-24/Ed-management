import React from "react";

export function AnnouncementsTable() {
  return (
    <>
      <header style={{
        display: 'flex',
        gap: '40px',
        marginBottom: '28px',
        paddingLeft: '4px',
        paddingRight: '4px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          width: '200px',
          fontFamily: 'IBM Plex Sans',
          color: '#050f24'
        }}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/13abdd97753d807c44af1d6578d1e0653e8551d8" alt="" width={22} height={22} />
          <span style={{ fontSize: '16px' }}>Name</span>
        </div>
        <div style={{
          width: '150px',
          fontFamily: 'IBM Plex Sans',
          color: '#050f24',
          fontSize: '16px'
        }}>
          Dept
        </div>
        <div style={{
          fontFamily: 'IBM Plex Sans',
          color: '#050f24',
          fontSize: '16px'
        }}>
          User
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
        <article style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          paddingLeft: '4px',
          paddingRight: '4px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            width: '200px'
          }}>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              color: '#6f757e'
            }}>
              1
            </div>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              color: '#6f757e'
            }}>
              WP Deadline
            </div>
          </div>
          <div style={{
            width: '150px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e'
          }}>
            DBMS
          </div>
          <div style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e'
          }}>
            Dr. Anoop Raj
          </div>
        </article>

        <article style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          paddingLeft: '4px',
          paddingRight: '4px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            width: '200px'
          }}>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              color: '#6f757e'
            }}>
              2
            </div>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              color: '#6f757e'
            }}>
              DBMS Task Cancel
            </div>
          </div>
          <div style={{
            width: '150px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e'
          }}>
            WP
          </div>
          <div style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e'
          }}>
            Prof. Lekha Nair
          </div>
        </article>

        <article style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          paddingLeft: '4px',
          paddingRight: '4px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            width: '200px'
          }}>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              color: '#6f757e'
            }}>
              3
            </div>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              color: '#6f757e'
            }}>
              DBMS Marks Updated
            </div>
          </div>
          <div style={{
            width: '150px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e'
          }}>
            OS
          </div>
          <div style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#6f757e'
          }}>
            Dr. Sreenath
          </div>
        </article>
      </div>
    </>
  );
}
