import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl} from 'react-intl';
import { Typography, Button, TextField, InputLabel, Grid} from '@material-ui/core';
import './index.scss';

/**
* Login Register formulars
* @param object intl
* @param object history
*/
class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.viewFieldsLogin = this.viewFieldsLogin.bind(this);
    this.onPressLogin = this.onPressLogin.bind(this);
    this.onPressCreateAccount= this.onPressCreateAccount.bind(this);
    this.onPressForgotPassword = this.onPressForgotPassword.bind(this);
  }

  /**
  * View field register
  */
  viewFieldsRegister() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="webapp-register">
        <Typography variant="h5">
          <FormattedMessage id="webHome.register"></FormattedMessage>
        </Typography>
        <br />
        <InputLabel>{formatMessage({ id: 'webHome.email' })}</InputLabel>
        <TextField
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

  /**
  * View fields login
  */
  viewFieldsLogin() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="webapp-login">
        <Typography variant="h5">
          <FormattedMessage id="webHome.login"></FormattedMessage>
        </Typography>
        <br />
        <InputLabel>{formatMessage({ id: 'webHome.email' })}</InputLabel>
        <TextField
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
          <Button onClick={this.onPressForgotPassword}>
            <FormattedMessage id="webHome.forgotPassword"></FormattedMessage>
          </Button>
        </div>
      </div>
    );
  }

  /**
  *  On press login
  * This function is called by press the button login
  */
  onPressLogin() {
  }

  /**
  * On press create account
  * This function is called by press the button create account
  */
  onPressCreateAccount() {
  }

  /**
  * On press forgot password
  * This function is called by press the link forgot password
  */
  onPressForgotPassword() {
  }

  render() {
    return (
      <div className="webapp-login">
        <form noValidate autoComplete="off">
          <Grid container spacing={6}>
            <Grid item xs={6}>
              {this.viewFieldsLogin()}
            </Grid>
            <Grid item xs={6}>
              {this.viewFieldsRegister()}
            </Grid>
            <Grid item xs={6}>
              {/* Button Login */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => {}}
                size="large"
                fullWidth
              >
                <FormattedMessage id="webHome.signIn"></FormattedMessage>
              </Button>
            </Grid>
            <Grid item xs={6}>
              {/* Button register */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => {}}
                size="large"
                fullWidth
              >
                <FormattedMessage id="webHome.createAccount"></FormattedMessage>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

LoginRegister.propTypes = {
  history: PropTypes.objectOf(Object),
  intl: PropTypes.objectOf(String).isRequired,
};

LoginRegister.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(LoginRegister);
