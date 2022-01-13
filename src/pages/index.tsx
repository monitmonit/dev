import Head from 'next/head';

const Home: React.VFC = () => {
  return (
    <div>
      <Head>
        <title>Monit</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <div>Hello World!!</div>
    </div>
  );
};

export default Home;
