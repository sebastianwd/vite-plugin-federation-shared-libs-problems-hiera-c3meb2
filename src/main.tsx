import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppRemote from "./AppRemote";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppRemote />
  </React.StrictMode>,
  document.getElementById("root"),
);
