import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './Redux/reducers';

const root =  ({ children, initialState = {} }) => {
  const middleware = applyMiddleware(thunk, reduxPromise);
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(middleware)
  );

  return <Provider store={store}>{children}</Provider>;
};

export default root;