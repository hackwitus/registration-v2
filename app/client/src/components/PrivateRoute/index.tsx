import { Route } from 'react-router';
import * as React from 'react';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isAuthenticated = () => {
    return false;
  };

  const render = props => (isAuthenticated() === true ? <Component {...props} /> : <div>loading...</div>);

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
