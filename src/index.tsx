import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import AppState from "./AppState.js"

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById("render")
);