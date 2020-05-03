import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Grid, Paper, Typography } from '@material-ui/core';

import Layout from '../../components/Layout';
import { ReactComponent as Lungs } from '../../assets/SVG/LUNGS.svg';
import './HomeDoctor.scss';

function HomeDoctor(props) {
  const onPressUpload = () => {
    props.history.push('/upload');

  };
  // FIXME: displayName, when auth is implemented
  const displayName = 'Bruce';

  return (
    <Layout
    >
      <div className='ai-layout__content'>
        <Grid container spacing={10} >
          <Grid item xs={12} sm={7} className='firstPanel'>
            <Typography variant="h2" align="left">
              <FormattedMessage id="home.welcome"></FormattedMessage> {displayName}!
            </Typography>
            <Typography variant="body2" align="left" className='help-us'>
              <FormattedMessage id="home.helpUs"></FormattedMessage>
            </Typography>
            <Typography variant="body2" align="left">
              <FormattedMessage id={'HomeDoctorXRay.message.1'}></FormattedMessage>
              <strong><FormattedMessage id={'HomeDoctorXRay.message.2'}></FormattedMessage></strong>
              <FormattedMessage id={'HomeDoctorXRay.message.3'}></FormattedMessage>
            </Typography>
            <Typography align="left" className='note'>
              <FormattedMessage id="home.bodyDoctor.note"></FormattedMessage>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className='secondPanel'
          >

            <Button className='paper' onClick={onPressUpload}>
              <Paper>
                <Lungs></Lungs>
                <Typography variant="body2" align="center">
                  <FormattedMessage id="home.dragAndDrop"></FormattedMessage>
                </Typography>
              </Paper>
            </Button>
            <Typography className='or' align="center">
              <FormattedMessage id="app.or"></FormattedMessage>
            </Typography>
            <Button
              onClick={onPressUpload}
              color="primary"
              variant="outlined"
              size="large"
            >
              <FormattedMessage
                id={'home.openFile'}
              ></FormattedMessage>
            </Button>


          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

HomeDoctor.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default HomeDoctor;

