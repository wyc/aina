import React from 'react';

import { Link } from 'gatsby';

const Footer = () => {
  const date = new Date().getFullYear();
  const copyright = `© ${date} Victoria H. Chang`;

  return (
    <footer className='Footer'>
      <Link to='/'>Home</Link>
      <div className='Footer__copyright'>{copyright}</div>
    </footer>
  );
};

export default Footer;
