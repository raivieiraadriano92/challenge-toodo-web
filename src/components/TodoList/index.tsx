import React from "react";
import { connect } from "react-redux";
import { Empty } from "antd";

import { Todo } from "../../store/ducks/todos/types";
import { ApplicationState } from "../../store";

import TodoItem from "../TodoItem";

import { List } from "./styles";

interface StateProps {
  todos: Todo[];
}

type Props = StateProps;

const TodoList = ({ todos }: Props) => {
  if (!todos.length) return <Empty description="All done \o/" />;

  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo: any) => <TodoItem todo={todo} />}
    />
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

export default connect(mapStateToProps)(TodoList);
