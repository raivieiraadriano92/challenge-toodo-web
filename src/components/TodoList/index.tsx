import React from "react";
import { connect } from "react-redux";
import { Empty, Layout, List } from "antd";

import { Todo } from "../../store/ducks/todos/types";
import { ApplicationState } from "../../store";

import TodoItem from "../TodoItem";

interface StateProps {
  todos: Todo[];
}

type Props = StateProps;

const TodoList = ({ todos }: Props) => (
  <Layout.Content style={{ padding: "50px" }}>
    <div
      style={{
        background: "#fff",
        margin: "16px",
        padding: 24,
        minHeight: 280
      }}
    >
      {!todos.length && <Empty description="All done \o/" />}
      {!!todos.length && (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={todo => <TodoItem todo={todo} />}
        />
      )}
    </div>
  </Layout.Content>
);

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

export default connect(mapStateToProps)(TodoList);
