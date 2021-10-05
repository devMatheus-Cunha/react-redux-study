import { createStore, combineReducers } from "redux";

// reducers
import { ReducerNumber } from "./reducers/numbers";

const reducers = combineReducers({
  numbers: ReducerNumber
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;

