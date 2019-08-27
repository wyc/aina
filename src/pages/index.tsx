import React, { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import Metadata from '../components/Metadata/Metadata';

import '../styles/base.css';

const IndexPage = (): ReactElement => {
  return (
    <Layout>
      <Metadata title='Home' />

      <div className='Aina Column'>
        <div className='Row'>
          <h1 className='Aina__title'>Āina</h1>
          <h3 className='Emoji__shaka'>🤙</h3>
        </div>

        <div className='Aina__description'>
          New found land to build your awesome web app.
        </div>

        <a
          className='Aina__button'
          href={'https://www.github.com/victoriahchang/aina'}
        >
          Explore
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
