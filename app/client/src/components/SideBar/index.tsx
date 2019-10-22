import { Sidebar as SemanticSideBar, Menu } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import NavLink from '../NavLink';
import { toggleSidebar } from '../../actions/sidebarActions';

interface SidebarProps {
  visible: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ visible, toggleSidebar }) => {
  return (
    <SemanticSideBar
      className="sidebar"
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      onHide={() => toggleSidebar()}
      vertical
      visible={visible}
      size="huge"
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
)(Sidebar);
