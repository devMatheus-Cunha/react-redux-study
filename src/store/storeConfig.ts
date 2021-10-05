import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state: any, action: any) {
    console.log(action)
    switch (action.type) {
      case "CHANGE_MIN_NUMBER":
        return {
          ...state,
          min: action.payload,
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

