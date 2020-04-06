import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';

import Layout from '../../components/Layout';
import Surface from '../../assets/PNG/surface1.png';

function PatientQuizLaunch(props) {
  const onPressBack = () => {
    props.history.push('/howDoYouFeel');
  };
  const onPressStart = () => {
    props.history.push('/patient-quiz/1');
  };

  return (
    <div>
      <Layout
        onPressBack={onPressBack}
      >
        <div className='ai-layout__content'>
          <div>
            <h1><FormattedMessage id={'patientQuizLaunch.title'}></FormattedMessage></h1>
            <p><FormattedMessage id={'patientQuizLaunch.description.1'}></FormattedMessage></p>
            <p><FormattedMessage id={'patientQuizLaunch.description.2'}></FormattedMessage></p>
          </div>
          <div className="ai-layout__content__bottom">
            <img src={Surface} />
            <p className="hint"><FormattedMessage id={'patientQuizLaunch.description.1'}></FormattedMessage></p>
            <Button
              onClick={onPressStart}
              color="primary"
              variant="contained"
              size="large"
              fullWidth
            >
              <FormattedMessage
                id={'patent.quiz.yes'}
              ></FormattedMessage>
            </Button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

PatientQuizLaunch.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default PatientQuizLaunch;

