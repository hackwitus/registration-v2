import * as React from 'react';
import NavLink from '../NavLink';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <NavLink label="Home" route="/" className="sidebar__link" activeClass="sidebar__link--active" />
      <NavLink
        label="Registration"
        route="/registration"
        className="sidebar__link"
        activeClass="sidebar__link--active"
      />
      <NavLink
        label="Confirmation"
        route="/confirmation"
        className="sidebar__link"
        activeClass="sidebar__link--active"
      />
      <NavLink label="Teams" route="/teams" className="sidebar__link" activeClass="sidebar__link--active" />
      <NavLink label="Administration" route="/admin" className="sidebar__link" activeClass="sidebar__link--active" />
    </div>
  );
};

export default Sidebar;
