import React, { ReactElement, ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): ReactElement => {
  return (
    <div className='Layout'>
      <Header />

      <main className='Main'>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
