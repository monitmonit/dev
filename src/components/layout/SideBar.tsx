import { Layout, Menu, Typography } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SideBar: React.VFC = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <div style={{ padding: '4px 24px' }}>
          <Typography.Title level={2} style={{ color: 'white' }}>
            Monit
          </Typography.Title>
        </div>
        <Menu.Item key="1" icon={<UserOutlined />}>
          DashBoard
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Tables
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Map
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Register
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
