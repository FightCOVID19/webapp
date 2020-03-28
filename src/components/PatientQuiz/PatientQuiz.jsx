import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';

import './PatientQuiz.scss';


function PatientQuiz({
  text,
  closeContact,
  text2,
  onPressYes,
  onPressNo
}) {
  return (
    <div className='ai-patient-quiz'>
      <p>
        {text && (
          <FormattedMessage id={text}></FormattedMessage>
        )}{' '}
        {!!closeContact && (
          <span>
            <FormattedMessage
              id={'patent.quiz.closeContact'}
            ></FormattedMessage>
          </span>
        )}{' '}
        {text2 && (
          <FormattedMessage id={text2}></FormattedMessage>
        )}
      </p>
      <div>
        <Button
          onClick={onPressYes}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        >
          <FormattedMessage
            id={'patent.quiz.yes'}
          ></FormattedMessage>
        </Button>
        <Button
          onClick={onPressNo}
          color="primary"
          variant="outlined"
          size="large"
          fullWidth
        >
          <FormattedMessage
            id={'patent.quiz.no'}
          ></FormattedMessage>
        </Button>
      </div>
    </div>

  );
}

PatientQuiz.propTypes = {
  text: PropTypes.string.isRequired,
  closeContact: PropTypes.bool,
  text2: PropTypes.string,
  onPressYes: PropTypes.func,
  onPressNo: PropTypes.func
};

export default PatientQuiz;

