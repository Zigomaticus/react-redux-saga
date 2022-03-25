// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
// App
import App from "./App";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
