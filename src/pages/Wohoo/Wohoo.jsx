import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';

import Layout from '../../components/Layout';
import { ReactComponent as Check } from '../../assets/SVG/Check.svg';
import './Wohoo.scss';


function Wohoo(props) {
  const onPressUpload = () => {
    props.history.push('/upload');
  };
  const onPressFinish = () => {
    props.history.push('/howDoYouFeel');
  };

  return (
    <div>
      <Layout
      >
        <div className='ai-layout__content'>
          <div>
            <h1><FormattedMessage id={'wohoo.title'}></FormattedMessage></h1>
            <p><FormattedMessage id={'wohoo.text.1'}></FormattedMessage></p>
            <p><span className={'check-mark'}><Check /></span><FormattedMessage id={'wohoo.text.1'}></FormattedMessage></p>
            <p><span className={'check-mark'}><Check /></span><FormattedMessage id={'wohoo.text.1'}></FormattedMessage></p>
            <p><span className={'check-mark'}><Check /></span><FormattedMessage id={'wohoo.text.1'}></FormattedMessage></p>
            <p><span className={'check-mark'}><Check /></span><FormattedMessage id={'wohoo.text.1'}></FormattedMessage></p>
            <p><FormattedMessage id={'wohoo.text.2'}></FormattedMessage></p>
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
                id={'wohoo.upload'}
              ></FormattedMessage>
            </Button>
            <Button
              onClick={onPressUpload}
              color="primary"
              variant="outlined"
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

Wohoo.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default Wohoo;

