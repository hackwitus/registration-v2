import * as React from 'react';
import { Button, Dropdown, Header } from 'semantic-ui-react';
import { signIn, signOut } from '../../auth/auth0-spa';
import logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';

interface NavBarProps {
  user: any;
}

const NavBar: React.FC<NavBarProps> = ({ user }) => {
  const renderProfile = () => {
    if (user.authenticated) {
      return (
        <>
          <img src={user.profile.picture} alt="" className="navbar__user-image" />
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
    <div className="navbar">
      <div className="navbar__logo-container">
        <img src={logo} alt="site logo" className="navbar__logo-img" />
        <h1 className="navbar__logo-text">HackWITus Registration V2</h1>
      </div>
      <div className="navbar__user-container">{renderProfile()}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NavBar);
