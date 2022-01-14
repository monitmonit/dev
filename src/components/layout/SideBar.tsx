import { Layout, Menu, Typography } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <div key="1" style={{ padding: '4px 24px' }}>
          <Typography.Title level={2} style={{ color: 'white' }}>
            Monit
          </Typography.Title>
        </div>
        <Menu.Item key="2" icon={<UserOutlined />}>
          DashBoard
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          Tables
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          Map
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          Register
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
