import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl} from 'react-intl';
import { Typography, Grid } from '@material-ui/core';
import LoginRegister from '../../components/LoginRegister';
import ViewLoginSocialMedia from './ViewLoginSocialMedia';
import ViewHowToHelp from './ViewHowToHelp';

import './index.scss';

/**
* Web home
*/
class WebHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Grid container className="webapp-home" spacing={6} alignContent="flex-start">
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" align="left">
            <FormattedMessage id="webHome.title"></FormattedMessage>
          </Typography>
          <br /><br />
          <FormattedMessage id="webHome.description1"></FormattedMessage>
          <br /><br />
          <FormattedMessage
            id="webHome"
            defaultMessage={formatMessage({ id: 'webHome.description2' })}
            values={{
              important1: <b>{formatMessage({ id: 'webHome.description2.important.1' })}</b>,
              important2: <b>{formatMessage({ id: 'webHome.description2.important.2' })}</b>,
            }}
          />
          <br /><br />
          <FormattedMessage id="webHome.description3"></FormattedMessage>
        </Grid>
        <Grid item xs={12} sm={8}>
          <LoginRegister />
        </Grid>

        {/* Decoration line or */}
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={8} className="decoration-line-or">
          <div className="wrapper">
            <div className="line"><hr /></div>
            <div className="or">or</div>
            <div className="line"><hr /></div>
          </div>
        </Grid>
        {/* Social media icons used to login */}
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={8} className="icons-google-facebook-apple">
          <ViewLoginSocialMedia history={this.props.history} />
        </Grid>
        {/* How do we help in the fight against COVID-19 */}
        <Grid item xs={12} >
          <Typography variant="h4" align="left">
            <FormattedMessage id="webHome.subTitle"></FormattedMessage>
          </Typography>
        </Grid>
        <ViewHowToHelp history={this.props.history} />
      </Grid>
    );
  }
}

WebHome.propTypes = {
  history: PropTypes.objectOf(Object),
  intl: PropTypes.objectOf(String).isRequired,
};

export default injectIntl(WebHome);
