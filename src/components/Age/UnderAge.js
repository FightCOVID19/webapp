import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card, Typography, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Nurse from '../../assets/PNG/NURSE.png';
import './Age.scss';

/**
* Under Age
* @param function onPressBack = return to Age component
*/
function UnderAge({
  onPressBack
}) {
  return (
    <div className="ai-age">
      <Card className="ai-age-content">
        <IconButton
          color="primary"
          aria-label="previous page"
          onClick={onPressBack}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <div className="ai-age-image">
          <img src={Nurse} />
        </div>
        <div className="ai-age-under">
          <Typography variant="h4" align="center">
            <FormattedMessage id="age.underAge"></FormattedMessage>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
UnderAge.propTypes = {
  onPressBack: PropTypes.func.isRequired,
};

export default UnderAge;
