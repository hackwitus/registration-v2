import { Header, Sidebar as SemanticSideBar } from 'semantic-ui-react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../store';
import * as React from 'react';

import { toggleSidebar } from '../actions/sidebarActions';
import ProtectedRoute from '../components/PrivateRoute';
import Callback from '../containers/Callback';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import Registration from './Registration';
import Landing from './Landing';
import Confirmation from './Confirmation';
import Teams from './Teams';
import TeamDetail from './TeamDetail';

const App: React.FC<{ visible: boolean; toggleSidebar: Function }> = ({ visible, toggleSidebar }) => {
  return (
    <ConnectedRouter history={history}>
      <div className="app">
        <Navbar />
        <SemanticSideBar.Pushable>
          <Sidebar />
          <SemanticSideBar.Pusher>
            <div className="app__view">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/registration" component={Registration} />
                <Route path="/confirmation" component={Confirmation} />
                <Route exact path="/teams" component={Teams} />
                <Route path="/teams/:id" component={TeamDetail} />
                <Route exact path="/callback" component={Callback} />
                <ProtectedRoute path="/protected" component={() => <Header>Hello Protection</Header>} />
                <Route path="/admin" component={() => <Header>Hello Admin</Header>} />
              </Switch>
            </div>
          </SemanticSideBar.Pusher>
        </SemanticSideBar.Pushable>
      </div>
    </ConnectedRouter>
  );
};

const mapStateToProps = (state: any) => ({
  visible: state.sidebar.visible,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      toggleSidebar,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
