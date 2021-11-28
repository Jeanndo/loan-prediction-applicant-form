import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import  rootReducer from './Redux/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



