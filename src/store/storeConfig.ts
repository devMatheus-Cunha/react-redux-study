import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state: any, action: any) {
    switch (action.type) {
      case "CHANGE_MIN_NUMBER":
        return {
          ...state,
          min: action.payload,
        };
      case "CHANGE_MAX_NUMBER":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 1,
          max: 30,
        };
    }
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;

