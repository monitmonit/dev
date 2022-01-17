import React from 'react';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Monit</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
