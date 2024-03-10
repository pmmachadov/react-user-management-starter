import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const enableMocking = async () => {
  if (import.meta.env === "development") {
    return;
  }

  const { worker } = await import("./mocks/browser.js");

  return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
