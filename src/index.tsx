import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// redux
import { Provider } from "react-redux";
import configStore from "./store/storeConfig"

const store = configStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
