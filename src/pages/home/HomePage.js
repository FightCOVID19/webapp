import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Typography } from '@material-ui/core';
import Patient from '../../assets/PNG/SEARCH FOR SYMPTOMS.png';
import Doctor from '../../assets/PNG/DOCTOR.png';
import './HomePage.scss';

/**
* Home
* this page allows the user to select whether he is a patient or a doctor
* Props
* @param history
*/
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.onPressPatient = this.onPressPatient.bind(this);
    this.onPressDoctor = this.onPressDoctor.bind(this);
  }

  /**
  * On press patient
  */
  onPressPatient() {
    this.props.history.push('/howDoYouFeel');
  }

  /**
  * On press doctor
  */
  onPressDoctor() {
    this.props.history.push('/LoginDoctor');
  }

  render() {
    return (
      <div className="ai-home-page">
        <Card className="ai-home-page-content">
          <div className="ai-home-page-title">
            <Typography variant="h4" align="left">
              <FormattedMessage id="home.welcome"></FormattedMessage>
            </Typography>
            <Typography variant="subtitle" align="left">
              <FormattedMessage id="home.selectPatientDoctor"></FormattedMessage>
            </Typography>
          </div>
          <Card className="ai-home-page-box" onClick={this.onPressPatient}>
            <div>
              <img src={Patient} />
            </div>
          </Card>
          <Card className="ai-home-page-box" onClick={this.onPressDoctor}>
            <div>
              <img src={Doctor} />
            </div>
          </Card>
          <div className="ai-home-page-white-background" />
        </Card>
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.objectOf(Object),
};
