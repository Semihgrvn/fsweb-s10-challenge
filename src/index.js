import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import reducers from "./reducers"
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, applyMiddleware(thunk))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
