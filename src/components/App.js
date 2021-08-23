import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './general/Navbar';
import MainCategory from './categories/MainCategory';
import MainBooks from './books/MainBooks';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <MainBooks />
      </Route>
      <Route path="/category">
        <MainCategory />
      </Route>
    </Switch>
  </Router>
);

export default App;
