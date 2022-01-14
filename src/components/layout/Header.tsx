import { Layout, Menu } from 'antd';

const { Header: HeaderComponent } = Layout;

const Header = () => {
  return (
    <HeaderComponent style={{ background: 'purple' }}>
      <Menu></Menu>
    </HeaderComponent>
  );
};

export default Header;
