import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Transition from './pages/Transition';
import Books from './pages/Books';
import PrivateRoute from './components/PrivateRoute';
import AddBook from './pages/AddBook';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact={true} path="/transition" component={Transition} />
        <PrivateRoute exact={true} path="/books" component={Books} />
        <PrivateRoute exact={true} path="/books/add" component={AddBook} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export default App;
