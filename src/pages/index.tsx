import BaseLayout from "../components/layout/BaseLayout";
import GlobalStyle from "../styles/GlobalStyle";

const Home: React.VFC = () => {
  return (
    <div>
    <GlobalStyle/>
      <BaseLayout>
        <div>
          Hello
        </div>
      </BaseLayout>
    </div>
  );
};

export default Home;
