import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Input, Button, Form as FormAntd, Row, Typography } from "antd";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { RouteComponentProps } from "react-router-dom";

import { TodoNew } from "../../store/ducks/todos/types";
import * as TodosActions from "../../store/ducks/todos/actions";

import { Col } from "./styles";

interface StateProps {
  todoAdd(todo: TodoNew): void;
}

interface FormValues {
  name: string;
}

type Props = StateProps & RouteComponentProps;

const TodoForm = ({ history, todoAdd }: Props) => (
  <Row>
    <Col span={8} offset={8}>
      <Typography.Title>New Todo</Typography.Title>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required")
        })}
        onSubmit={(values: FormValues) => {
          todoAdd(values);
          history.push("/");
        }}
        render={() => (
          <Form>
            <Field
              name="name"
              render={({ field, form }: FieldProps<FormValues>) => (
                <div>
                  <FormAntd.Item
                    validateStatus={
                      form.touched.name && form.errors.name && form.errors.name
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
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form>
        )}
      />
    </Col>
  </Row>
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
