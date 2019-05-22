import { action } from "typesafe-actions";
import { TodosTypes, Todo, TodoNew } from "./types";

export const todoAdd = (todo: TodoNew) => action(TodosTypes.TODO_ADD, { todo });

export const todoEdit = (todo: Todo) => action(TodosTypes.TODO_EDIT, { todo });

export const todoRemove = (id: number) =>
  action(TodosTypes.TODO_REMOVE, { id });

export const todoToggle = (id: number) =>
  action(TodosTypes.TODO_TOGGLE, { id });
