/**
 * Action types
 */
export enum TodosTypes {
  TODO_ADD = "@todos/TODO_ADD",
  TODO_REMOVE = "@todos/TODO_REMOVE"
}

/**
 * Data types
 */
export interface Todo {
  id: number;
  name: string;
}

/**
 * State type
 */
export interface TodosState {
  readonly list: Todo[];
}
