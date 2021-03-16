import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { auth } from '../utils/firebase';

const PrivateRoute = (props) => {
  const history = useHistory();
  const eu = auth.onAuthStateChanged((user) => {
    console.log('rota privada???', user);
    return user ? true : false;
  });
  
  return eu ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    history.push('/login')
  );
};

export default PrivateRoute;
