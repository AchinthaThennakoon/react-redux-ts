import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const allReducers = combineReducers({
  bank: bankReducer,
});

export default allReducers;
