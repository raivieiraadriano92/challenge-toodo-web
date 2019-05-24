import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Empty, Radio, Typography } from "antd";

import { Todo } from "../../core/store/ducks/todos/types";
import { ApplicationState } from "../../core/store";

import TodoItem from "../TodoItem";

import { List, Row } from "./styles";

interface StateProps {
  todos: Todo[];
}

type Props = StateProps;

const TodoList = ({ todos }: Props) => {
  const [filter, setFilter] = useState("all");
  const [list, setList] = useState(todos);

  useEffect(() => {
    setList(
      todos.filter((todo: Todo) => {
        if (filter === "done") return todo.done;

        if (filter === "todo") return !todo.done;

        return true;
      })
    );
  }, [filter]);

  return (
    <Fragment>
      <Row align="middle" justify="space-between" type="flex">
        <Typography.Title>ToDo List</Typography.Title>
        <Radio.Group
          value={filter}
          onChange={({ target: { value } }) => setFilter(value)}
        >
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="todo">ToDo</Radio.Button>
          <Radio.Button value="done">Done</Radio.Button>
        </Radio.Group>
      </Row>
      {!list.length && <Empty description="All done \o/" />}
      {!!list.length && (
        <List
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(todo: any) => <TodoItem todo={todo} />}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

export default connect(mapStateToProps)(TodoList);
