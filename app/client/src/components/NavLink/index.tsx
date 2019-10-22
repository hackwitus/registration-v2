import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as React from 'react';

interface INavLinkProps {
  className: string;
  label: string;
  route: string;
  activeClass: string;
  currentRoute: string;
}

const NavLink: React.FC<INavLinkProps> = ({ className, label, route, activeClass, currentRoute }) => {
  return (
    <Link className={`${className} ${currentRoute === route ? activeClass : ''}`} to={route}>
      {label}
    </Link>
  );
};

const mapStateToProps = (state: any) => ({
  currentRoute: state.router.location.pathname,
});

export default connect(mapStateToProps)(NavLink);
