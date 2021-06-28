import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import teamsReducer from './slices/teams';
import regeneratorRuntime from 'regenerator-runtime';

const store = configureStore({
  reducer: {
    teamsState: teamsReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
