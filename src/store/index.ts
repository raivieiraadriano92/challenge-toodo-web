import { createStore, Store } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { TodosState } from "./ducks/todos/types";
import rootReducer from "./ducks/rootReducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface ApplicationState {
  todos: TodosState;
}

const store: Store<ApplicationState> = createStore(persistedReducer);

const persistor = persistStore(store);

export default { store, persistor };
