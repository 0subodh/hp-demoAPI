import React from 'react';

const Footer = () => {
  return (
    <div
      className="main-footer"
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '35px',
        background: '#6cf',
      }}
    >
      <hr />
      <p style={{ textAlign: 'center' }}>© Subodh Adhikari 2022</p>
    </div>
  );
};

export default Footer;
