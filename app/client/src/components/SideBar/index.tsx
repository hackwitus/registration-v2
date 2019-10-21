import * as React from 'react';
import { Link } from 'react-router-dom';
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
      <NavLink label="Teams" route="/teams" className="sidebar__link" activeClass="sidebar__link--active" />
      <NavLink label="Administration" route="/admin" className="sidebar__link" activeClass="sidebar__link--active" />
    </div>
  );
};

export default Sidebar;
