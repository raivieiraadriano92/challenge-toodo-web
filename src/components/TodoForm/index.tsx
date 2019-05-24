import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Input, Button, Form as FormAntd, Row, Typography } from "antd";
import { Formik, Form, Field, FieldProps, FormikProps } from "formik";
import * as Yup from "yup";
import { RouteComponentProps } from "react-router-dom";

import { ApplicationState } from "../../core/store";
import { Todo, TodoNew } from "../../core/store/ducks/todos/types";
import * as TodosActions from "../../core/store/ducks/todos/actions";

import { Col } from "./styles";

interface StateProps {
  match: {
    params: {
      id?: number;
    };
  };
  todos: Todo[];
  todoAdd(todo: TodoNew): void;
  todoEdit(todo: Todo): void;
}

interface FormValues {
  name: string;
}

type Props = StateProps & RouteComponentProps;

const TodoForm = ({
  history,
  match: {
    params: { id }
  },
  todos,
  todoAdd,
  todoEdit
}: Props) => {
  const handleSubmit = (values: FormValues) => {
    (id ? todoEdit : todoAdd)(values);
    history.push("/");
  };

  let refForm: Formik<FormValues> | null;

  useEffect(() => {
    if (id) {
      const todo: Todo | undefined = todos.find(item => item.id === +id);
      if (todo && refForm) {
        refForm.resetForm(todo);
      }
    }
  }, []);

  return (
    <Row>
      <Col span={8} offset={8}>
        <Typography.Title>{`${id ? "Edit" : "New"} ToDo`}</Typography.Title>
        <Formik
          ref={ref => {
            refForm = ref;
          }}
          initialValues={{ name: "" }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required")
          })}
          onSubmit={handleSubmit}
          render={() => (
            <Form>
              <Field
                name="name"
                render={({ field, form }: FieldProps<FormValues>) => (
                  <div>
                    <FormAntd.Item
                      validateStatus={
                        form.touched.name &&
                        form.errors.name &&
                        form.errors.name
                          ? "error"
                          : ""
                      }
                      help={form.errors.name}
                    >
                      <Input {...field} placeholder="Name" />
                    </FormAntd.Item>
                  </div>
                )}
              />
              <Button block type="primary" htmlType="submit">
                Save
              </Button>
            </Form>
          )}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  todos: state.todos.list
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
