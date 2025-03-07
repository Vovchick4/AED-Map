import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import ButtonBack from 'shared/ui/ButtonBack';

import { SIGNUP } from '../../../Auth/const';
import permissionService from '../../../Auth/permissionService';
import ButtonSignOut from '../../../Auth/submodules/SignIn/components/ButtonSignOut';
import SignUpSendmail from '../../../Auth/submodules/SignUp/submodules/SignUpSendmail';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
});

const Account = ({ user }) => {
  const classes = useStyles();
  const [
    permissionForSignUp,
    changePermissionForSignUp
  ] = useState(false);

  useEffect(() => {
    const permissionSignUp = permissionService(
      SIGNUP,
      user
    );
    changePermissionForSignUp(permissionSignUp);
  }, [user]);

  return (
    <div className={classes.container}>
      {permissionForSignUp && <SignUpSendmail />}
      <ButtonSignOut />
      <ButtonBack />
    </div>
  );
};

Account.defaultProps = {
  user: null
};

Account.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string
  })
};

export default connect(state => ({
  user: state.user.user
}))(Account);
