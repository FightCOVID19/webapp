import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl} from 'react-intl';
import { Button, Grid} from '@material-ui/core';
import ViewFieldsLogin from './ViewFieldsLogin';
import ViewFieldsRegister from './ViewFieldsRegister';
import './index.scss';

/**
* Login Register formulars
* @param object intl
* @param object history
*/
export class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.onPressLogin = this.onPressLogin.bind(this);
    this.onPressCreateAccount= this.onPressCreateAccount.bind(this);
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

  render() {
    return (
      <div className="webapp-login">
        <form noValidate autoComplete="off">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6}>
              <div className="formular-login-register">
                <div className="fields">
                  <ViewFieldsLogin history={this.props.history} />
                </div>
                <div className="button">
                  {/* Button Login */}
                  <Button
                    id="buttonLogin"
                    variant="contained"
                    color="primary"
                    onClick={this.onPressLogin}
                    size="large"
                    fullWidth
                  >
                    <FormattedMessage id="webHome.signIn"></FormattedMessage>
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className="formular-login-register">
                <div className="fields">
                  <ViewFieldsRegister history={this.props.history} />
                </div>
                <div className="button">
                  {/* Button register */}
                  <Button
                    id="buttonRegister"
                    variant="contained"
                    color="primary"
                    onClick={this.onPressCreateAccount}
                    size="large"
                    fullWidth
                  >
                    <FormattedMessage id="webHome.createAccount"></FormattedMessage>
                  </Button>
                </div>
              </div>
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

export default injectIntl(LoginRegister);
