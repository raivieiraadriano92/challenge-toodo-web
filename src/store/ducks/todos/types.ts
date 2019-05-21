/**
 * Action types
 */
export enum TodosTypes {
  TODO_ADD = "@todos/TODO_ADD",
  TODO_REMOVE = "@todos/TODO_REMOVE",
  TODO_TOGGLE = "@todos/TODO_TOGGLE"
}

/**
 * Data types
 */
export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

export interface TodoNew {
  name: string;
}

/**
 * State type
 */
export interface TodosState {
  readonly list: Todo[];
}
