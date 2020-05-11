import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Grid, Paper, Typography } from '@material-ui/core';

import Layout from '../../components/Layout';
import { ReactComponent as Diagnostic } from '../../assets/SVG/DIAGNOSTIC.svg';
import { ReactComponent as Depression } from '../../assets/SVG/DEPRESSION.svg';

import './HomePatient.scss';

function HomePatient(props) {
  const [selection, setSelection] = useState('');
  const onPressSelectGreat = () => {
    setSelection('GREAT');
  };
  const onPressSelectNotGood = () => {
    setSelection('NOT_GOOD');
  };

  const onPressWhatIShouldDo = () => {
    setSelection('great');
  };

  // FIXME: displayName, when auth is implemented
  const displayName = 'Bruce';

  return (
    <Layout
    >
      <div className='ai-layout__content home-patient'>
        <Typography variant="h2" align="left">
          <FormattedMessage id="home.welcome"></FormattedMessage> {displayName}!
        </Typography>
        <Typography variant="body2" align="left">
          <FormattedMessage id="howDoYouFeel.title"></FormattedMessage>
        </Typography>
        <Grid container
          spacing={10}
        >
          <Grid item xs={12} sm={6} className='first'>
            <Button className={`paper ${selection === 'NOT_GOOD' ? 'selected' : ''}`} onClick={onPressSelectNotGood}>
              <Paper>
                <Depression></Depression>
                <Typography variant="h3" align="center">
                  <FormattedMessage id="howDoYouFeel.notGood"></FormattedMessage>
                </Typography>
              </Paper>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} className='second'>
            <Button className={`paper ${selection === 'GREAT' ? 'selected' : ''}`} onClick={onPressSelectGreat}>
              <Paper>
                <Diagnostic></Diagnostic>
                <Typography variant="h3" align="center">
                  <FormattedMessage id="howDoYouFeel.whatShouldIDo"></FormattedMessage>
                </Typography>
              </Paper>
            </Button>
          </Grid>
          <Grid item xs={12}>
            {!!selection &&
              <Button
                onClick={onPressWhatIShouldDo}
                color="primary"
                variant="contained"
                size="large"
              >
                <FormattedMessage
                  id={'howDoYouFeel.whatShouldIDo'}
                ></FormattedMessage>
              </Button>}
          </Grid>
        </Grid>
      </div>
    </Layout >
  );
}

HomePatient.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default HomePatient;

