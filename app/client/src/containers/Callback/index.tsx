import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
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
