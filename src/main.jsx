import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Import Redux Provider
import { BrowserRouter } from 'react-router-dom';
import store from '../src/Redux/store.js'; // Import your Redux store
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
