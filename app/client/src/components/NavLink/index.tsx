import * as React from 'react';
import { Link } from 'react-router';

interface INavLinkProps {
  label: string;
  to: string;
}

const NavLink: React.FC<INavLinkProps> = ({ label, to }) => {
  return <Link to={to}>{label}</Link>;
};

export default NavLink;
