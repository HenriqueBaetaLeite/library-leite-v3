import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';
import PrivateRoute from './components/PrivateRoute';
import AddBook from './pages/AddBook';
import About from './pages/About';
import EditBook from './pages/EditBook';
import NotFound from './pages/NotFound';
import Transition from './pages/Transition'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact={true} path="/books" component={Books} />
        <PrivateRoute exact={true} path="/books/add" component={AddBook} />
        <PrivateRoute exact={true} path="/books/:id" component={EditBook} />
        <PrivateRoute exact={true} path="/sobre" component={About} />
        <PrivateRoute exact={true} path="/transition" component={Transition} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
