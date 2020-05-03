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
class LoginRegister extends Component {
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
            <Grid item xs={12} sm={6}>
              <ViewFieldsLogin history={this.props.history} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ViewFieldsRegister history={this.props.history} />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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

export default injectIntl(LoginRegister);
