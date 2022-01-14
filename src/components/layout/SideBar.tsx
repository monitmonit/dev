import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">Monit</Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
