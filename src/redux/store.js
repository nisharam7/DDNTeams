import {createStore, applyMiddleware, AnyAction} from "redux";
import {createLogger} from "redux-logger";
import thunk, {ThunkMiddleware} from "redux-thunk";
import rootReducer, {AppState} from "./reducers";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger())
);

export default store;
