import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';

import Layout from '../../components/Layout';
import { ReactComponent as Ambulance } from '../../assets/SVG/AMBULANCE.svg';

function PatientRiskConfirmed(props) {
  const onPressFinish = () => {
    props.history.push('/howDoYouFeel');
  };

  return (
    <div>
      <Layout
      >
        <div className='ai-layout__content'>
          <div>
            <div className="ai-layout__content__svg" >
              <Ambulance />
            </div>
            <h1><FormattedMessage id={'patientRiskConfirmed.message'}></FormattedMessage></h1>

          </div>
          <div className="ai-layout__content__bottom">
            <Button
              onClick={onPressFinish}
              color="primary"
              variant="contained"
              size="large"
              fullWidth
            >
              <FormattedMessage
                id={'finish'}
              ></FormattedMessage>
            </Button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

PatientRiskConfirmed.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default PatientRiskConfirmed;

