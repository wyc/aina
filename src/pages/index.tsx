import React, { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import Metadata from '../components/Metadata/Metadata';

import '../styles/base.css';

const IndexPage = (): ReactElement => {
  const repoLink = 'https://www.github.com/victoriahchang/aina';

  return (
    <Layout>
      <Metadata title='Home' />

      <div className='Aina Column'>
        <div className='Row'>
          <h1 className='Aina__title'>Āina</h1>
          <h3 className='Aina__logo'>🤙</h3>
        </div>

        <div className='Aina__description'>
          Your new found land to build an awesome web app.
        </div>

        <a className='Aina__button' href={repoLink}>
          Explore
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
