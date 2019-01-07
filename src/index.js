import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import AppState from "./AppState.js"

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById("render")
);