import * as React from 'react';
import { Sidebar as SemanticSideBar, Menu, Segment, Divider } from 'semantic-ui-react';
import NavLink from '../NavLink';

interface SidebarProps {
  visible: boolean;
  setVisible: Function;
}

const Sidebar: React.FC<SidebarProps> = ({ visible, setVisible }) => {
  return (
    <SemanticSideBar
      className="sidebar"
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      size="large"
    >
      <Menu.Item
        as={() => <NavLink label="Home" route="/" className="sidebar__link" activeClass="sidebar__link--active" />}
      />
      <Menu.Item
        as={() => (
          <NavLink
            label="Registration"
            route="/registration"
            className="sidebar__link"
            activeClass="sidebar__link--active"
          />
        )}
      />
      <Menu.Item
        as={() => (
          <NavLink
            label="Confirmation"
            route="/confirmation"
            className="sidebar__link"
            activeClass="sidebar__link--active"
          />
        )}
      />
      <Menu.Item
        as={() => (
          <NavLink label="Teams" route="/teams" className="sidebar__link" activeClass="sidebar__link--active" />
        )}
      />
      <Menu.Item
        as={() => (
          <NavLink
            label="Administration"
            route="/admin"
            className="sidebar__link"
            activeClass="sidebar__link--active"
          />
        )}
      />
    </SemanticSideBar>
  );
};

export default Sidebar;
