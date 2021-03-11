import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Teste from './Teste';

const App = () => {
  return (
    <div className="App">
      <h2>RAC Leite</h2>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/teste" component={Teste} />
      </Switch>
    </div>
  );
};

export default App;
