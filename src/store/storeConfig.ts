import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    return {
      min: 1,
      max: 10
    }
  },
  names: function (state, action) {
    return [
      "ana",
      "bia",
      "lu"
    ]
  }
})

function storeConfig(){
  return createStore(reducers)
}

export default storeConfig

