import BaseLayout from '../components/layout/BaseLayout';
import GlobalStyle from '../styles/GlobalStyle';

const Home: React.VFC = () => {
  return (
    <div>
      <GlobalStyle />
      <BaseLayout>
        <div style={{ color: 'red' }}>Helloasdasd</div>
      </BaseLayout>
    </div>
  );
};

export default Home;
