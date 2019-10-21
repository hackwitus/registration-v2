import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { history } from '../store';
import { Header } from 'semantic-ui-react';

import Landing from './Landing';
import Navbar from '../components/NavBar';
import ProtectedRoute from '../components/PrivateRoute';
import Callback from '../containers/Callback';
import Sidebar from '../components/SideBar';
import Registration from './Registration';

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Navbar />
      <div className="app">
        <Sidebar />
        <div className="app__view">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/callback" component={Callback} />
            <ProtectedRoute path="/protected" component={() => <Header>Hello Protection</Header>} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  );
};

export default App;
