import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl} from 'react-intl';
import { Typography, Grid, IconButton, SvgIcon} from '@material-ui/core';
import IdentifySymptoms from '../../assets/PNG/BROKEN ARM.png';
import ImproveDiagnostics from '../../assets/PNG/ASK A DOCTOR.png';
import HelpGovernments from '../../assets/PNG/SHIFT ROTATION.png';
import {ReactComponent as Google} from '../../assets/SVG/Google.svg';
import {ReactComponent as Facebook} from '../../assets/SVG/facebook.svg';
import {ReactComponent as Apple} from '../../assets/SVG/Apple.svg';
import LoginRegister from '../../components/LoginRegister';
import './index.scss';

const howToHelp = [
  {
    title: 'webHome.howToHelp1.title',
    description: 'webHome.howToHelp1.description',
    image: IdentifySymptoms
  },
  {
    title: 'webHome.howToHelp2.title',
    description: 'webHome.howToHelp2.description',
    image: ImproveDiagnostics
  },
  {
    title: 'webHome.howToHelp3.title',
    description: 'webHome.howToHelp3.description',
    image: HelpGovernments
  },
];

/**
* Web home
*/
export class WebHome extends Component {
  constructor(props) {
    super(props);
    this.ViewLoginSocialMedia = this.ViewLoginSocialMedia.bind(this);
    this.ViewHowToHelp = this.ViewHowToHelp.bind(this);
    this.onPressGoogle = this.onPressGoogle.bind(this);
    this.onPressFacebook = this.onPressFacebook.bind(this);
    this.onPressApple = this.onPressApple.bind(this);
  }

  /**
  * On press google
  * This function is called by press the icon google
  */
  onPressGoogle() {
  }

  /**
  * On press facebook
  * This function is called by press the icon facebook
  */
  onPressFacebook() {
  }

  /**
  * On press apple
  * This function is called by press the icon apple
  */
  onPressApple() {
  }

  /**
  * View login social media
  * This function returns a view with the icons Google, Facebook and Apple
  */
  ViewLoginSocialMedia() {
    return (
      <div className="wrapper">
        <div>
          <IconButton
            id="buttonGoogle"
            onClick={this.onPressGoogle}
            fontSize="small"
          >
            <SvgIcon
              component={Google}
              fontSize="small"
            />
          </IconButton>
        </div>
        <div>
          <IconButton
            id="buttonFacebook"
            onClick={this.onPressFacebook}
            fontSize="small"
          >
            <SvgIcon
              component={Facebook}
              fontSize="small"
            />
          </IconButton>
        </div>
        <div>
          <IconButton
            id="buttonApple"
            onClick={this.onPressApple}
            fontSize="small"
          >
            <SvgIcon
              component={Apple}
              fontSize="small"
            />
          </IconButton>
        </div>
      </div>
    );
  }

  /**
  * View how to help
  * This function returns the view of each of the help forms
  */
  ViewHowToHelp() {
    return (
      howToHelp.map(help => (
        <Grid item xs={4} key={help.title} alignContent="center">
          <div className="help">
            <img src={help.image} />
            <Typography variant="h6">
              <FormattedMessage id={help.title}></FormattedMessage>
            </Typography>
            <br />
            <FormattedMessage id={help.description}></FormattedMessage>
          </div>
        </Grid>
      ))
    );
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Grid container className="webapp-home" spacing={6} alignContent="flex-start">
        <Grid item xs="4">
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
        <Grid item xs="8">
          <LoginRegister />
        </Grid>

        {/* Decoration line or */}
        <Grid item xs={4} />
        <Grid item xs={8} className="decoration-line-or">
          <div className="wrapper">
            <div className="line"><hr /></div>
            <div className="or">or</div>
            <div className="line"><hr /></div>
          </div>
        </Grid>
        {/* Social media icons used to login */}
        <Grid item xs={4} />
        <Grid item xs={8} className="icons-google-facebook-apple">
          {this.ViewLoginSocialMedia()}
        </Grid>
        {/* How do we help in the fight against COVID-19 */}
        <Grid item xs={12} >
          <Typography variant="h4" align="left">
            <FormattedMessage id="webHome.subTitle"></FormattedMessage>
          </Typography>
        </Grid>
        {this.ViewHowToHelp()}
      </Grid>
    );
  }
}

WebHome.propTypes = {
  history: PropTypes.objectOf(Object),
  intl: PropTypes.objectOf(String).isRequired,
};

export default injectIntl(WebHome);
