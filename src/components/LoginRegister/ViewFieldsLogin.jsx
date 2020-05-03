import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl} from 'react-intl';
import { Button, TextField, InputLabel} from '@material-ui/core';

/**
* View fields login
*/
function ViewFieldsLogin(props) {
  const { formatMessage } = props.intl;

  /**
  * On press forgot password
  * This function is called by press the link forgot password
  */
  const onPressForgotPassword = () => {
  };

  return (
    <div className="webapp-login">
      <h4>
        <FormattedMessage id="webHome.login"></FormattedMessage>
      </h4>
      <InputLabel>{formatMessage({ id: 'webHome.email' })}</InputLabel>
      <TextField
        id="email"
        fullWidth
        type="email"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={formatMessage({ id: 'webHome.emailAddress' })}
        variant="outlined"

      />
      <InputLabel>{formatMessage({ id: 'webHome.password' })}</InputLabel>
      <TextField
        id="password"
        type="password"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={formatMessage({ id: 'webHome.myPassword' })}
        variant="outlined"
      />
      <div className="forgot-password">
        <Button onClick={onPressForgotPassword}>
          <FormattedMessage
            id="webHome.forgotPassword"
            defaultMessage={formatMessage({ id: 'webHome.forgotPassword' })}
            values={{
              important: <b>{formatMessage({ id: 'webHome.forgotPassword.important' })}</b>,
            }}
          />
        </Button>
      </div>
    </div>
  );
}

ViewFieldsLogin.propTypes = {
  intl: PropTypes.objectOf(String).isRequired,
  history: PropTypes.objectOf(Object),
};

export default injectIntl(ViewFieldsLogin);
