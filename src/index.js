// react
import React from 'react';
import ReactDOM from 'react-dom';
// app
import App from './App';
// navigation
import {BrowserRouter} from 'react-router-dom'
// redux
import {Provider} from 'react-redux';
import {store} from './redux/store'
// styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
