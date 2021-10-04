import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    return {
      min: 10,
      max: 30,
    };
  },
  names: function (state, action) {
    return ["ana", "bia", "lu"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
