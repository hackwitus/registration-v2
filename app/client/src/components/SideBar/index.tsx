import { Sidebar as SemanticSideBar, Menu } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import NavLink from '../NavLink';
import { blurSidebar } from '../../actions/sidebarActions';

interface SidebarProps {
  visible: boolean;
  blurSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ visible, blurSidebar }) => {
  return (
    <SemanticSideBar
      className="sidebar"
      as={Menu}
      onHide={blurSidebar}
      animation="push"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      size={window.innerWidth <= 375 ? 'large' : 'huge'}
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
      blurSidebar,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
