import React from "react"; // Imports the React library for building the component.
import ReactDOM from "react-dom/client"; // Imports the ReactDOM client to enable efficient updates and rendering of React components.
import App from "./App.jsx"; // Imports the main App component from the App.jsx file.

const enableMocking = async () => {
  if (import.meta.env === "development") {
    // Checks if the current environment is development.
    // If true, it does not initialize the mock service worker.
    return;
  }

  // Dynamically imports the worker setup from the "./mocks/browser.js" file.
  // This is only executed in non-development environments.
  const { worker } = await import("./mocks/browser.js");

  // Starts the mock service worker.
  return worker.start();
};

enableMocking().then(() => {
  // Initializes the root React component after potentially starting the mock service worker.
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
