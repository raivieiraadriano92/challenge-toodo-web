import { Reducer } from "redux";
import { Todo, TodosState, TodosTypes } from "./types";

const INITIAL_STATE: TodosState = {
  list: [
    { id: 1, name: "teste 1" },
    { id: 2, name: "teste 2" },
    { id: 3, name: "teste 3" }
  ]
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.TODO_ADD:
      return {
        ...state,
        list: [action.payload.todo, ...state.list]
      };
    case TodosTypes.TODO_REMOVE:
      return {
        ...state,
        list: action.payload.data.filter(
          (todo: Todo) => todo.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default reducer;
