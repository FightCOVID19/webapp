import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import IdentifySymptoms from '../../assets/PNG/BROKEN ARM.png';
import ImproveDiagnostics from '../../assets/PNG/ASK A DOCTOR.png';
import HelpGovernments from '../../assets/PNG/SHIFT ROTATION.png';

export const howToHelp = [
  {
    title: 'webHome.howToHelp1.title',
    description: 'webHome.howToHelp1.description',
    image: IdentifySymptoms
  },
  {
    title: 'webHome.howToHelp2.title',
    description: 'webHome.howToHelp2.description',
    image: ImproveDiagnostics
  },
  {
    title: 'webHome.howToHelp3.title',
    description: 'webHome.howToHelp3.description',
    image: HelpGovernments
  },
];

/**
* View how to help
*/
function ViewHowToHelp() {
  return (
    howToHelp.map(help => (
      <Grid item xs={12} sm={12} md={4} key={help.title}>
        <div className="help">
          <img src={help.image} />
          <h5>
            <FormattedMessage id={help.title}></FormattedMessage>
          </h5>
          <br />
          <p>
            <FormattedMessage id={help.description}></FormattedMessage>
          </p>
        </div>
      </Grid>
    ))
  );
}

ViewHowToHelp.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default ViewHowToHelp;
