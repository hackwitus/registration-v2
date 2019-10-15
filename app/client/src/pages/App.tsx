import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { history } from '../store';

import Landing from './Landing';

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
