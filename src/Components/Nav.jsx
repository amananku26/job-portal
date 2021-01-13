import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BellOutlined } from "@ant-design/icons";
// import "./index.css";
import { useDispatch } from "react-redux"
import {getJobData} from "../redux/actionCreator"
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Nav() {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getJobData())
  }, [])
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ float: "right" }}
        >
          <BellOutlined
            style={{ fontSize: "25px", color: "white", marginRight: "25px" }}
          />
          <UserOutlined
            style={{ fontSize: "25px", color: "white", marginRight: "25px" }}
          />
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Jobs</Menu.Item>
            <Menu.Item key="3">Storage</Menu.Item>
            <Menu.Item key="4">Account</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Nav;
