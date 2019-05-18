import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store: Store<ApplicationState> = createAppropriateStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
