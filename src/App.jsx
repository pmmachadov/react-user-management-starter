import React from 'react'; // Imports the React library to enable JSX syntax and component creation.
import { ToastContainer } from 'react-toastify'; // Imports ToastContainer from react-toastify, which is a component that will render toast notifications.
import 'react-toastify/dist/ReactToastify.css'; // Imports the default styling for the react-toastify notifications.
import UsersWrapper from './components/UsersWrapper'; // Imports the UsersWrapper component from a file in the components directory.

function App() {
  // The functional component definition of App.
  return (
    <div>
      <UsersWrapper /> {/* Renders the UsersWrapper component, which likely contains the logic and UI for managing a list of users. */ }
      <ToastContainer /> {/* Renders the ToastContainer component, which acts as a container for toast notifications. This enables any part of the app to trigger toast notifications that will be displayed to the user. */ }
    </div>
  );
}

export default App; // Exports the App component, making it available for use in other parts of the application, like the entry point (index.js).
