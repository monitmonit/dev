import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import theme from '../components/layout/theme';

import BaseLayout from '../components/layout/BaseLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Monit</title>
        <link rel="favicon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.1/antd.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
