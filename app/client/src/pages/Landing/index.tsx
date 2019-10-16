import * as React from 'react';
import { useAuth0 } from '../../auth/auth0-spa';
import Navbar from '../../components/NavBar';

const Landing: React.FC = () => {
  const { isAuthenticated, loading, user, logout, loginWithRedirect } = useAuth0();
  return (
    <>
      <Navbar
        user={user}
        loading={loading}
        isAuthenticated={isAuthenticated}
        logout={logout}
        login={loginWithRedirect}
      />
    </>
  );
};

export default Landing;
