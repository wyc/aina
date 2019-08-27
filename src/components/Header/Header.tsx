import React, { ReactElement, ReactNode } from 'react';

import { Link } from 'gatsby';

export interface IHeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: IHeaderProps): ReactElement => {
  return (
    <header className='Nav Row Header'>
      <Link to='/'>Home</Link>
      {children}
    </header>
  );
};

export default Header;
