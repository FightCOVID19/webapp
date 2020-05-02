import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';

import Layout from '../../components/Layout';
import { ReactComponent as Ambulance } from '../../assets/SVG/HEALTH INSURANCE.svg';

function PatientRiskConfirmedXRay(props) {
  const onPressUpload = () => {
    props.history.push('/upload');
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
            <p className='font-26'><FormattedMessage id={'patientRiskConfirmedXRay.message.1'}></FormattedMessage><strong><FormattedMessage id={'patientRiskConfirmedXRay.message.2'}></FormattedMessage></strong><FormattedMessage id={'patientRiskConfirmedXRay.message.3'}></FormattedMessage></p>

          </div>
          <div className="ai-layout__content__bottom">
            <Button
              onClick={onPressUpload}
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

PatientRiskConfirmedXRay.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default PatientRiskConfirmedXRay;

