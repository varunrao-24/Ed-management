import React from 'react';
import Header1 from './Header1';
import TableRow from './TableRow';
import TableFooter from './TableFooter';

const TableLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '840px',
    margin: '0 auto',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid #e1e1e1'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  };

  return (
    <div style={layoutStyle}>
      <Header1 />
      <div style={contentStyle}>
        <TableRow index={1} subject="WP" code="WP-1" marks={98} date="28-02-2025" />
        <TableRow index={2} subject="WP" code="WP-2" marks={98} date="27-02-2025" />
        <TableRow index={3} subject="OS" code="OS-1" marks={97} date="27-02-2025" />
        <TableRow index={4} subject="OS" code="OS-2" marks={97} date="27-02-2025" />
        <TableRow index={5} subject="DBMS" code="DBMS" marks={96} date="27-02-2025" />
        <TableFooter />
      </div>
    </div>
  );
};

export default TableLayout;

