import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Header from './components/ui/Header';
import Teams from './components/Teams';
import Home from './components/ui/Home';
import Tournaments from './components/Tournaments';
import CalendarTeam from './components/CalendarTeam';
import CalendarTournament from './components/CalendarTournament';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/teams" component={Teams} exact />
      <Route path="/teams/id/:id" component={CalendarTeam} exact />
      <Route path="/teams/id/:id/period/:dateFrom/:dateTo" component={CalendarTeam} exact />
      <Route path="/teams/search/:keyword" component={Teams} exact />
      <Route path="/tournaments" component={Tournaments} exact />
      <Route path="/tournaments/id/:id" component={CalendarTournament} exact />
      <Route
        path="/tournaments/id/:id/period/:dateFrom/:dateTo"
        component={CalendarTournament}
        exact
      />
      <Route path="/tournaments/search/:keyword" component={Tournaments} exact />
    </BrowserRouter>
  );
};

export default hot(App);
