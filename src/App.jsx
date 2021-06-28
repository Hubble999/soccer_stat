import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Header from './components/Header';
import Teams from './components/Teams';
import CalendarTeam from './components/CalendarTeam';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <h1>Hello Soccer!!!</h1>
      <Route path="/" component={Teams} exact />
      <Route path="/search/:keyword" component={Teams} exact />
      <Route path="/team/:id" component={CalendarTeam} exact />
    </BrowserRouter>
  );
};

export default hot(App);
