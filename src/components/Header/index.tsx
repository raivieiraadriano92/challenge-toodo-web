import React from "react";
import { Layout, Menu, Icon } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Header = ({ history }: RouteComponentProps) => (
  <Layout.Header>
    <Menu
      selectedKeys={[history.location.pathname]}
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: "64px" }}
      onClick={({ key }: any) => history.push(key)}
    >
      <Menu.Item key="/">
        <Icon type="unordered-list" />
        Todos
      </Menu.Item>
      <Menu.Item key="/add">
        <Icon type="plus" />
        Add
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default withRouter(Header);
