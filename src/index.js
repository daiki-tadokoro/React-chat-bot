import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";

ReactDOM.render(
  // React.StrictModeで全体が二回呼び出される
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
