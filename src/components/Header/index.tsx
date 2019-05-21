import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Layout, Menu, Icon } from "antd";

import { Todo } from "../../store/ducks/todos/types";
import * as TodosActions from "../../store/ducks/todos/actions";

interface StateProps {
  todoAdd(todo: Todo): void;
}

type Props = StateProps;

const Header = ({ todoAdd }: Props) => (
  <Layout.Header>
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="todos">
        <Icon type="unordered-list" />
        Todos
      </Menu.Item>
      <Menu.Item
        key="add"
        onClick={() =>
          todoAdd({ id: Math.random(), name: "teste", done: false })
        }
      >
        <Icon type="plus" />
        Add
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Header);
