import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n/config.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);
