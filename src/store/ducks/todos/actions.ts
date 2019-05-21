import { action } from "typesafe-actions";
import { TodosTypes, TodoNew } from "./types";

export const todoAdd = (todo: TodoNew) => action(TodosTypes.TODO_ADD, { todo });

export const todoRemove = (id: number) =>
  action(TodosTypes.TODO_REMOVE, { id });

export const todoToggle = (id: number) =>
  action(TodosTypes.TODO_TOGGLE, { id });
