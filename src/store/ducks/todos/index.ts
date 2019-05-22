import { Reducer } from "redux";
import { Todo, TodosState, TodosTypes } from "./types";

const INITIAL_STATE: TodosState = {
  list: [
    { id: 1, name: "teste 1", done: false },
    { id: 2, name: "teste 2", done: false },
    { id: 3, name: "teste 3", done: false }
  ]
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.TODO_ADD:
      return {
        ...state,
        list: [
          { ...action.payload.todo, id: Math.random(), done: false },
          ...state.list
        ]
      };
    case TodosTypes.TODO_EDIT:
      return {
        ...state,
        list: [
          { ...action.payload.todo },
          ...state.list.filter(item => item.id !== action.payload.todo.id)
        ]
      };
    case TodosTypes.TODO_REMOVE:
      return {
        ...state,
        list: state.list.filter((todo: Todo) => todo.id !== action.payload.id)
      };
    case TodosTypes.TODO_TOGGLE:
      return {
        ...state,
        list: state.list.map((todo: Todo) => ({
          ...todo,
          done: todo.id === action.payload.id ? !todo.done : todo.done
        }))
      };
    default:
      return state;
  }
};

export default reducer;
