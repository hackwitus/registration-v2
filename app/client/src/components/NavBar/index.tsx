import { Button, Dropdown, Menu, Segment, Sticky } from 'semantic-ui-react';
import '@animated-burgers/burger-rotate/dist/styles.css';
import { signIn, signOut } from '../../auth/auth0-spa';
import Burger from '@animated-burgers/burger-rotate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import { toggleSidebar } from '../../actions/sidebarActions';
import logo from '../../assets/images/logo.png';

interface NavBarProps {
  user: any;
  visible: boolean;
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ user, visible, toggleSidebar }) => {
  const renderProfile = () => {
    if (user.authenticated) {
      return (
        <Menu.Item>
          <img src={user.profile.picture} alt="" className="navbar__user-image" style={{ marginRight: '1rem' }} />
          <Dropdown text={`Hi ${user.profile.nickname}`} pointing>
            <Dropdown.Menu>
              <Dropdown.Header>User Actions</Dropdown.Header>
              <Dropdown.Item onClick={() => signOut()}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item style={{ height: '100%' }}>
          <Button primary onClick={() => signIn()}>
            Sign In
          </Button>
        </Menu.Item>
      );
    }
  };

  const handleToggleSidebar = (e: any) => {
    e.preventDefault();
    toggleSidebar();
  };

  return (
    <Sticky>
      <Segment inverted style={{ borderRadius: '0', marginBottom: '0' }}>
        <Menu inverted pointing secondary>
          <Menu.Item>
            <Burger isOpen={visible} onClick={handleToggleSidebar} />
          </Menu.Item>
          <Menu.Item>
            <img src={logo} alt="site logo" />
            <h1 className="navbar__logo-text">HackWITus Registration V2</h1>
          </Menu.Item>
          <Menu.Menu position="right">{renderProfile()}</Menu.Menu>
        </Menu>
      </Segment>
    </Sticky>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    visible: state.sidebar.visible,
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
