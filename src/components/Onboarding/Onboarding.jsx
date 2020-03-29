import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, Card, Typography, Checkbox } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import './Onboarding.scss';

/**
* On boarding
* @param string title
* @param string description
* @param string image
* @param string pageNumber
* @param number totalPages
* @param function onPressStart
* @param function onPressNavigation
* @param string error
*/
function Onboarding({
  title,
  description,
  image,
  pageNumber,
  totalPages,
  onPressStart,
  onPressNavigation,
  error,
}) {
  /* navigation between onboarding pages */
  const pagesOnboardingNavigation = [];
  for (let index = 1; index <= totalPages; index +=1 ){
    pagesOnboardingNavigation.push(
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<RadioButtonCheckedIcon />}
        checked={index === parseInt(pageNumber, 10)}
        color="primary"
        onChange={() => onPressNavigation(index)}
      />
    );
  }
  if (error) {
    return (
      <div className='ai-onboarding'>
        <Card className="ai-onboarding__content">
          <p>
            <Typography variant="h4" align="center">
              <FormattedMessage id={error}></FormattedMessage>
            </Typography>
          </p>
        </Card>
      </div>
    );
  }
  return (
    <div className='ai-onboarding'>
      <Card className="ai-onboarding__content">
        <p>
          <Typography variant="h4" align="center">
            <FormattedMessage id="app.title"></FormattedMessage>
          </Typography>
          <Typography variant="h5" align="center">
            <FormattedMessage id="app.description">
              {txt => <span className="ai-onboarding-subtitle">{txt.toUpperCase()}</span>}
            </FormattedMessage>
          </Typography>
        </p>
        <div className="ai-onboarding-image">
          <img src={image} />
        </div>
        <p>
          <Typography variant="h6" align="center">
            <FormattedMessage id={title}></FormattedMessage>
          </Typography>
          <Typography variant="body1" align="center">
            <FormattedMessage id={description}></FormattedMessage>
          </Typography>
        </p>
        <div className="ai-onboarding-navigation">
          {pagesOnboardingNavigation.map(page => page)}
        </div>
        <div>
          <Button
            onClick={onPressStart}
            color="primary"
            variant="contained"
            size="large"
            fullWidth
          >
            <FormattedMessage
              id={'onboarding.start'}
            ></FormattedMessage>
          </Button>
        </div>
      </Card>
    </div>

  );
}

Onboarding.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pageNumber: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPressStart: PropTypes.func.isRequired,
  onPressNavigation: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Onboarding.defaultProps = {
  error: null,
};

export default Onboarding;
