import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextGlobal from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextGlobal.Provider value="Halo">
      <App />
    </ContextGlobal.Provider>
  </React.StrictMode>
);
