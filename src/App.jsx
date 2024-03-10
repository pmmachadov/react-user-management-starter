import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UsersWrapper from './components/UsersWrapper';



function App() {
  return (
    <div>
      <UsersWrapper />
      <ToastContainer />
    </div>
  );
}

export default App;
