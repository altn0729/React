import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import App from "./app";
// import SimpleHabit from "./components/simpleHabit";
import AppHooks from "./appHooks";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SimpleHabit /> */}
    <AppHooks />
  </React.StrictMode>,
  document.getElementById("root")
);
