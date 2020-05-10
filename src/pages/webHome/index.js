import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl} from 'react-intl';
import { Grid } from '@material-ui/core';
import LoginRegister from '../../components/LoginRegister';
import ViewLoginSocialMedia from './ViewLoginSocialMedia';
import ViewHowToHelp from './ViewHowToHelp';

import './index.scss';

/**
* Web home
*/
export class WebHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="ai-layout">
        <Grid container className="webapp-home" spacing={6}>
          <Grid item xs={12} sm={12} md={4}>
            <h1>
              <FormattedMessage id="webHome.title"></FormattedMessage>
            </h1>
            <br />
            <p>
              <FormattedMessage id="webHome.description1"></FormattedMessage>
            </p>
            <p>
              <FormattedMessage
                id="webHome.description2"
                defaultMessage={formatMessage({ id: 'webHome.description2' })}
                values={{
                  important1: <b>{formatMessage({ id: 'webHome.description2.important.1' })}</b>,
                  important2: <b>{formatMessage({ id: 'webHome.description2.important.2' })}</b>,
                }}
              />
            </p>
            <p>
              <FormattedMessage id="webHome.description3"></FormattedMessage>
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <LoginRegister />
          </Grid>

          {/* Decoration line or */}
          <Grid item xs={12} sm={12} md={4} />
          <Grid item xs={12} sm={12} md={8} className="decoration-line-or">
            <div className="wrapper">
              <div className="line"><hr /></div>
              <div className="or">or</div>
              <div className="line"><hr /></div>
            </div>
          </Grid>
          {/* Social media icons used to login */}
          <Grid item xs={12} sm={12} md={4} />
          <Grid item xs={12} sm={12} md={8} className="icons-google-facebook-apple">
            <ViewLoginSocialMedia history={this.props.history} />
          </Grid>
          {/* How do we help in the fight against COVID-19 */}
          <Grid item xs={12} sm={12} md={12}>
            <h1>
              <FormattedMessage id="webHome.subTitle"></FormattedMessage>
            </h1>
          </Grid>
          <ViewHowToHelp history={this.props.history} />
        </Grid>
      </div>
    );
  }
}

WebHome.propTypes = {
  history: PropTypes.objectOf(Object),
  intl: PropTypes.objectOf(String).isRequired,
};

export default injectIntl(WebHome);
