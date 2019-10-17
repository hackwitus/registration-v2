import * as React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import logo from '../../assets/images/logo.png';

interface NavbarProps {
  user: any;
  loading: boolean;
  isAuthenticated: boolean;
  logout: Function;
  login: Function;
}

const NavBar: React.FC<NavbarProps> = props => {
  const renderProfile = () => {
    if (!props.loading && props.isAuthenticated) {
      return (
        <>
          <img src={props.user.picture} alt="" className="navbar__user-image" />
          <Dropdown text={`Hi ${props.user.nickname}`} pointing>
            <Dropdown.Menu>
              <Dropdown.Header>User Actions</Dropdown.Header>
              <Dropdown.Item onClick={() => props.logout()}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    } else {
      return (
        <>
          <Button primary onClick={() => props.login()}>
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
      </div>
      <div className="navbar__user-container">{renderProfile()}</div>
    </div>
  );
};

export default NavBar;
