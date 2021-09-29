import React from 'react';
import { Layout, Menu, Dropdown, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a>Linux</a>
    </Menu.Item>
    <Menu.Item>
      <a>Java</a>
    </Menu.Item>
    <Menu.Item>
      <a>Python</a>
    </Menu.Item>
  </Menu>
)

const App = () => {
  return (
    <Layout>
      <Header>
        <Dropdown overlay={menu}>
          <MenuOutlined style={{color: 'white'}}/>
        </Dropdown>
      </Header>
      <Content style={{ padding: '10px 50px' }}>
        <div>
          <Title level={1}>Matt Programming</Title>
          <Text>Welcome to the site.</Text>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
