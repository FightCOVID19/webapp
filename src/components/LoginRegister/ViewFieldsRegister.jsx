import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl} from 'react-intl';
import { Typography, TextField, InputLabel} from '@material-ui/core';

/**
* View fields register
*/
function ViewFieldsRegister(props) {
  const { formatMessage } = props.intl;

  return (
    <div className="webapp-register">
      <Typography variant="h5">
        <FormattedMessage id="webHome.register"></FormattedMessage>
      </Typography>
      <br />
      <InputLabel>{formatMessage({ id: 'webHome.email' })}</InputLabel>
      <TextField
        id="emailRegister"
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
        id="passwordRegister"
        type="password"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={formatMessage({ id: 'webHome.myPassword' })}
        variant="outlined"
      />
      <InputLabel>{formatMessage({ id: 'webHome.confirmPassword' })}</InputLabel>
      <TextField
        id="confirmPasswordRegister"
        type="password"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={formatMessage({ id: 'webHome.repeatPassword' })}
        variant="outlined"
      />
    </div>
  );
}

ViewFieldsRegister.propTypes = {
  intl: PropTypes.objectOf(String).isRequired,
  history: PropTypes.objectOf(Object),
};

export default injectIntl(ViewFieldsRegister);
