import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='add-movie'>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
