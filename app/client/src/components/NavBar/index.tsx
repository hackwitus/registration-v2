import { signIn, signOut } from '../../auth/auth0-spa';
import { Button, Dropdown, Menu, Segment, Responsive } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import { toggleSidebar } from '../../actions/sidebarActions';
import logo from '../../assets/images/logo.png';

interface NavBarProps {
  user: any;
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ user, toggleSidebar }) => {
  const renderProfile = () => {
    if (user.authenticated) {
      return (
        <>
          <img src={user.profile.picture} alt="" className="navbar__user-image" style={{ marginRight: '1rem' }} />
          <Dropdown text={`Hi ${user.profile.nickname}`} pointing>
            <Dropdown.Menu>
              <Dropdown.Header>User Actions</Dropdown.Header>
              <Dropdown.Item onClick={() => signOut()}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    } else {
      return (
        <>
          <Button primary onClick={() => signIn()} size="big">
            Sign In
          </Button>
        </>
      );
    }
  };

  return (
    <Segment inverted style={{ borderRadius: '0', marginBottom: '0' }}>
      <Menu inverted pointing secondary>
        <Menu.Item>
          <i className="fas fa-bars navbar__menu-control" onClick={() => toggleSidebar()}></i>
        </Menu.Item>
        <Menu.Item>
          <img src={logo} alt="site logo" />
          <h1 className="navbar__logo-text">HackWITus Registration V2</h1>
        </Menu.Item>
        <Menu.Item position="right">{renderProfile()}</Menu.Item>
      </Menu>
    </Segment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

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
)(NavBar);
