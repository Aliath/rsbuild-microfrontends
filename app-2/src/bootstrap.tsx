import React from "react";
import ReactDOM from "react-dom/client";
import { SharedApp } from "./shared-app";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <SharedApp />
    </React.StrictMode>
  );
}
