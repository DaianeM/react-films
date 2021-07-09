import React from 'react';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer} from 'react-toastify';

import './style.css';

function App() {
  return (
    <div className="app">
      <Routes/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
