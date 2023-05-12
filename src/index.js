import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "w3-css/w3.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

if (window.innerWidth > 800) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    // document.getElementById("root")
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    // document.getElementById("root")
  );
}
