import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';

import { handleAuthenticationCallback } from '../../actions/userActions';
import { Loader } from 'semantic-ui-react';

const Callback = ({ dispatch, user }) => {
  if (user.hasOwnProperty('authenticated')) return <Redirect to="/" />;
  dispatch(handleAuthenticationCallback());

  return (
    <Loader active size="huge">
      Loading User Profile
    </Loader>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Callback);
