import { Layout } from 'antd';
import SideBar from './SideBar';
import Header from './Header';

const { Content } = Layout;

const BaseLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <SideBar />
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
