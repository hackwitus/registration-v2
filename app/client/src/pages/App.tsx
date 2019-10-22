import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { history } from '../store';
import { Header, Sidebar as SemanticSideBar, Segment } from 'semantic-ui-react';

import Landing from './Landing';
import Navbar from '../components/NavBar';
import ProtectedRoute from '../components/PrivateRoute';
import Callback from '../containers/Callback';
import Sidebar from '../components/SideBar';
import Registration from './Registration';
import { bindActionCreators } from 'redux';
import { toggleSidebar } from '../actions/sidebarActions';
import { connect } from 'react-redux';

const App: React.FC<{ visible: boolean; toggleSidebar: Function }> = ({ visible, toggleSidebar }) => {
  return (
    <ConnectedRouter history={history}>
      <div className="app">
        <Navbar />
        <SemanticSideBar.Pushable>
          <Sidebar visible={visible} setVisible={toggleSidebar} />
          <SemanticSideBar.Pusher>
            <div className="app__view">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/callback" component={Callback} />
                <ProtectedRoute path="/protected" component={() => <Header>Hello Protection</Header>} />
                <Route path="/confirmation" component={() => <Header>Hello Confirmation</Header>} />
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
