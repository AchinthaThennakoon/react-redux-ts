import { applyMiddleware, createStore } from "redux";
import allReducers from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(allReducers, {}, applyMiddleware(thunk));
