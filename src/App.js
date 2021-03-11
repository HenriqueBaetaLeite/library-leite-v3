import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './pages/Login';
import Books from './pages/Books';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/books" component={Books} />
      </Switch>
    </div>
  );
};

export default App;
