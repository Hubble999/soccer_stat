import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import teamsReducer from './slices/teams';
import tournamentsReducer from './slices/tournaments';
import calendarTeamReducer from './slices/calendarTeam';
import calendarTournamentReducer from './slices/calendarTournament';
import regeneratorRuntime from 'regenerator-runtime';

const store = configureStore({
  reducer: {
    teamsState: teamsReducer,
    calendarTeamState: calendarTeamReducer,
    tournamentsState: tournamentsReducer,
    calendarTournamentState: calendarTournamentReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
