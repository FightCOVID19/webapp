import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FormattedMessage } from 'react-intl';
import { Card, Typography, IconButton, Button } from '@material-ui/core';
import './HowDoYouFeel.scss';

/**
* Home
* this page allows the user to select whether he is a patient or a doctor
* Props
* @param history
*/
export default class HowDoYouFeel extends Component {
  constructor(props) {
    super(props);
    this.onPressBack = this.onPressBack.bind(this);
    this.onPressFeelGood = this.onPressFeelGood.bind(this);
    this.onPressNotFeelGood = this.onPressNotFeelGood.bind(this);
  }

  /**
  * On press start
  */
  onPressBack() {
    this.props.history.push('/homeNew');
  }

  /**
  * On press feel good
  */
  onPressFeelGood() {
    this.props.history.push('/wohoo');
  }

  /**
  * On press not feel good
  */
  onPressNotFeelGood() {
    this.props.history.push('/quizLaunch');
  }


  render() {
    return (
      <div className="ai-how-do-you-feel-page">
        <Card className="ai-how-do-you-feel-content">
          <IconButton
            className="ai-how-do-you-feel-navigation"
            color="primary"
            aria-label="previous page"
            onClick={this.onPressBack}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <div className="ai-how-do-you-feel-title">
            <Typography variant="h5" align="left">
              <FormattedMessage id="howDoYouFeel.title"></FormattedMessage>
            </Typography>
          </div>
          <div className="ai-how-do-you-feel-button-group">
            <Button
              className="ai-how-do-you-feel-button"
              onClick={this.onPressNotFeelGood}
              color="primary"
              variant="contained"
              size="large"
              fullWidth
            >
              <FormattedMessage
                id={'howDoYouFeel.notGood'}
              ></FormattedMessage>
            </Button>
            <Button
              className="ai-how-do-you-feel-button"
              onClick={this.onPressFeelGood}
              color="primary"
              variant="outlined"
              size="large"
              fullWidth
            >
              <FormattedMessage
                id={'howDoYouFeel.great'}
              ></FormattedMessage>
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

HowDoYouFeel.propTypes = {
  history: PropTypes.objectOf(Object),
};
