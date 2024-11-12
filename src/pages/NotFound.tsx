import React from 'react';

const NotFPage = {
  paddingTop: '20rem',
  color: 'red',
  textAlign: 'center',
};

const containerStyle = {
  width: '500px',
  height: '500px',
  margin: '0 auto',
};

function NotFoundPage() {
  return (
    <div style={containerStyle}>
      <h1 style={NotFPage}>Page Not Found </h1>
    </div>
  );
}

export default NotFoundPage;
