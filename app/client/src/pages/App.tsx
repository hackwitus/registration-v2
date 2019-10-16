import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { history } from '../store';

import Landing from './Landing';
import ProtectedRoute from '../components/PrivateRoute';
import { Header } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute path="/protected" component={() => <Header>Hello Protection</Header>} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
