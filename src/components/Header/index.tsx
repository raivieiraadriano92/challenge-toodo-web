import React from "react";
import { Layout, Menu, Icon } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Header = ({ history }: RouteComponentProps) => {
  const handleNavigation = ({ key }: any) => {
    let path = "/";
    switch (key) {
      case "add":
        path += "add";
        break;
    }

    history.push(path);
  };

  console.log(history);

  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
        onClick={handleNavigation}
      >
        <Menu.Item key="todos">
          <Icon type="unordered-list" />
          Todos
        </Menu.Item>
        <Menu.Item key="add">
          <Icon type="plus" />
          Add
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default withRouter(Header);
