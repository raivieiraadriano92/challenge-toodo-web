import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { List, Typography, Button, Checkbox } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { Todo } from "../../core/store/ducks/todos/types";
import { ApplicationState } from "../../core/store";
import * as TodosActions from "../../core/store/ducks/todos/actions";

interface StateProps {
  todo: Todo;
  todoRemove(id: number): void;
  todoToggle(id: number): void;
}

type Props = StateProps & RouteComponentProps;

const TodoItem = ({ history, todo, todoRemove, todoToggle }: Props) => (
  <List.Item
    actions={[
      <Button
        icon="edit"
        onClick={() => history.push(`/edit/${todo.id}`)}
        shape="circle"
      />,
      <Button
        icon="delete"
        onClick={() => todoRemove(todo.id)}
        shape="circle"
      />
    ]}
  >
    <List.Item.Meta
      avatar={
        <Checkbox
          checked={todo.done}
          onChange={() => todoToggle(todo.id)}
          value={todo.done}
        />
      }
      title={
        <Typography.Text delete={todo.done} disabled={todo.done}>
          {todo.name}
        </Typography.Text>
      }
    />
  </List.Item>
);

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TodoItem));
