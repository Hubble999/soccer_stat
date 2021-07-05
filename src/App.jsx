import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Header from './components/ui/Header';
import Teams from './components/Teams';
import Home from './components/ui/Home';
import Page404 from './components/ui/Page404';
import Tournaments from './components/Tournaments';
import CalendarTeam from './components/CalendarTeam';
import CalendarTournament from './components/CalendarTournament';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/teams" component={Teams} exact />
        <Route path="/team/id/:id" component={CalendarTeam} exact />
        <Route path="/team/id/:id/period/:dateFrom/:dateTo" component={CalendarTeam} exact />
        <Route path="/teams/search/:keyword" component={Teams} exact />
        <Route path="/tournaments" component={Tournaments} exact />
        <Route path="/tournament/id/:id" component={CalendarTournament} exact />
        <Route
          path="/tournament/id/:id/period/:dateFrom/:dateTo"
          component={CalendarTournament}
          exact
        />
        <Route path="/tournaments/search/:keyword" component={Tournaments} exact />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default hot(App);
