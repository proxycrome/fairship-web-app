import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// actions
import { fetchProfile } from '../../../store/actions';

const Index = ({ fetchProfile }) => {
  useEffect(() => {
    fetchProfile();
  }, []);

  return <div className="page-content">profile</div>;
};

const mapStatetoProps = (state) => {
  const { profile, loading } = state.Account;
  return { profile, loading };
};

export default withRouter(connect(mapStatetoProps, { fetchProfile })(Index));
