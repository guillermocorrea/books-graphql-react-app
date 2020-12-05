import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
