import * as React from 'react';
import { Route } from 'react-router';
import { useAuth0 } from '../../auth/auth0-spa';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  React.useEffect(() => {
    const fn = async () => {
      if (loading === false && !isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path },
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path, loading]);

  const render = props => (isAuthenticated === true ? <Component {...props} /> : <div>loading...</div>);

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
