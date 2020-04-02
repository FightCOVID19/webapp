import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Card, Typography } from '@material-ui/core';
import './Age.scss';

/**
* Question
* @param function onPressNo
* @param function onPressYes
*/
function Question({
  onPressNo,
  onPressYes,
}) {
  return (
    <div className="ai-age">
      <Card className="ai-age-content">
        <div className="ai-age-question">
          <Typography variant="h4" align="center">
            <FormattedMessage id="age.question"></FormattedMessage>
          </Typography>
        </div>
        <div className="ai-age-buttons">
          <Button
            onClick={onPressYes}
            color="primary"
            variant="contained"
            size="large"
            fullWidth
          >
            <FormattedMessage
              id={'general.yes'}
            ></FormattedMessage>
          </Button>
          <Button
            className="ai-age-button-no"
            onClick={onPressNo}
            color="primary"
            variant="outlined"
            size="large"
            fullWidth
          >
            <FormattedMessage
              id={'general.no'}
            ></FormattedMessage>
          </Button>
        </div>
      </Card>
    </div>
  );
}

Question.propTypes = {
  onPressNo: PropTypes.func.isRequired,
  onPressYes: PropTypes.func.isRequired,
};

export default Question;
