import React, { ReactElement, ReactNode } from 'react';

export interface IFooterProps {
  children?: ReactNode;
}

const Footer = ({ children }: IFooterProps): ReactElement => {
  const github = 'https://www.github.com/victoriahchang';

  return (
    <footer className='Nav Footer'>
      {children}
      <div className='Footer__copy'>
        Founded on 💖 by{' '}
        <a href={github} rel='noopener noreferrer' target='_blank'>
          Vi
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
