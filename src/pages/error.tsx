import React, { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import Metadata from '../components/Metadata/Metadata';

const ErrorPage = (): ReactElement => {
  return (
    <Layout>
      <Metadata title='Error 404' />
      Error 404
    </Layout>
  );
};

export default ErrorPage;
