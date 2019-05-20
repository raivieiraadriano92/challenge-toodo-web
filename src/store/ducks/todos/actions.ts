import { action } from "typesafe-actions";
import { TodosTypes, Todo } from "./types";

export const todoAdd = (todo: Todo) => action(TodosTypes.TODO_ADD, { todo });

export const todoRemove = (id: number) =>
  action(TodosTypes.TODO_REMOVE, { id });
