import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Todo } from "../../store/ducks/todos/types";
import { ApplicationState } from "../../store";

import * as TodosActions from "../../store/ducks/todos/actions";

import TodoItem from "../TodoItem";

interface StateProps {
  todos: Todo[];
  todoAdd(todo: Todo): void;
}

type Props = StateProps;

const TodoList = ({ todos, todoAdd }: Props) => (
  <Fragment>
    <button onClick={() => todoAdd({ id: 1, name: "teste" })}>add</button>
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  </Fragment>
);

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
