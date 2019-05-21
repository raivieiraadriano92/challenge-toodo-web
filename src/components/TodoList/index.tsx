import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Empty, Layout, List, Typography, Button, Checkbox } from "antd";

import { Todo } from "../../store/ducks/todos/types";
import { ApplicationState } from "../../store";
import * as TodosActions from "../../store/ducks/todos/actions";

import Footer from "../Footer";
import Header from "../Header";

interface StateProps {
  todos: Todo[];
  todoAdd(todo: Todo): void;
  todoRemove(id: number): void;
  todoToggle(id: number): void;
}

type Props = StateProps;

const TodoList = ({ todos, todoRemove, todoToggle }: Props) => (
  <Fragment>
    <Header />
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
            renderItem={item => (
              <List.Item
                actions={[
                  <Button
                    icon="edit"
                    onClick={() => todoRemove(item.id)}
                    shape="circle"
                  />,
                  <Button
                    icon="delete"
                    onClick={() => todoRemove(item.id)}
                    shape="circle"
                  />
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Checkbox
                      onChange={() => todoToggle(item.id)}
                      value={item.done}
                    />
                  }
                  title={
                    <Typography.Text delete={item.done}>
                      {item.name}
                    </Typography.Text>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </Layout.Content>
    <Footer />
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
