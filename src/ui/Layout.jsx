import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import EmployeeManagement from "../pages/EmployeeManagement/EmployeeManagement";
import Navbar from "./Navbar";
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};
const items = [
  {
    key: "home",
    icon: <UserOutlined />,
    label: "Home",
  },
];

const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider style={siderStyle} breakpoint="lg" collapsedWidth="1">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Navbar />
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <EmployeeManagement />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mini-HRMS ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
