import { createStore, combineReducers } from "redux";
import { CounterReducer } from "./counter/reducer";

const store = createStore(
  combineReducers({
    counter: CounterReducer,
  })
);

export default store;
