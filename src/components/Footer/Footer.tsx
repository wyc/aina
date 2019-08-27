import React, { ReactElement, ReactNode } from 'react';

export interface IFooterProps {
  children?: ReactNode;
}

const Footer = ({ children }: IFooterProps): ReactElement => {
  return (
    <footer className='Nav Row Footer'>
      {children}

      <div className='Row Footer__copy'>
        Made by{' '}
        <a
          className='Nav__link'
          href={'https://www.github.com/victoriahchang'}
          rel='noopener noreferrer'
          target='_blank'
        >
          Vi
        </a>
        with
        <div className='Emoji__heart'>💖</div>
      </div>
    </footer>
  );
};

export default Footer;
