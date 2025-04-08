import { CSSProperties } from 'react';

const NotFPage:CSSProperties = {
  paddingTop: '20rem',
  color: 'red',
  textAlign: 'center',
};

const containerStyle:CSSProperties = {
  width: '500px',
  height: '500px',
  margin: '0 auto',
};


export default function NotFound() {
  return (
    <div style={containerStyle}>
      <h1 style={NotFPage}>Page Not Found </h1>
    </div>
  );
}

