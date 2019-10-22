import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';

import { handleAuthenticationCallback } from '../../actions/userActions';

const Callback = ({ dispatch, user }) => {
  if (user.hasOwnProperty('authenticated')) return <Redirect to="/" />;
  dispatch(handleAuthenticationCallback());

  return <div className="text-center">Loading user profile.</div>;
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Callback);
