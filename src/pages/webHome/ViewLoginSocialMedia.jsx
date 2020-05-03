import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, SvgIcon} from '@material-ui/core';
import {ReactComponent as Google} from '../../assets/SVG/Google.svg';
import {ReactComponent as Facebook} from '../../assets/SVG/facebook.svg';
import {ReactComponent as Apple} from '../../assets/SVG/Apple.svg';

/**
* View login social media
* This function returns a view with the icons Google, Facebook and Apple
*/
function ViewLoginSocialMedia() {
  /**
  * On press google
  * This function is called by press the icon google
  */
  const onPressGoogle = () => {
  };

  /**
  * On press facebook
  * This function is called by press the icon facebook
  */
  const onPressFacebook = () => {
  };

  /**
  * On press apple
  * This function is called by press the icon apple
  */
  const onPressApple = () => {
  };

  return (
    <div className="wrapper">
      <div>
        <IconButton
          id="buttonGoogle"
          onClick={onPressGoogle}
          fontSize="small"
        >
          <SvgIcon
            component={Google}
            fontSize="small"
          />
        </IconButton>
      </div>
      <div>
        <IconButton
          id="buttonFacebook"
          onClick={onPressFacebook}
          fontSize="small"
        >
          <SvgIcon
            component={Facebook}
            fontSize="small"
          />
        </IconButton>
      </div>
      <div>
        <IconButton
          id="buttonApple"
          onClick={onPressApple}
          fontSize="small"
        >
          <SvgIcon
            component={Apple}
            fontSize="small"
          />
        </IconButton>
      </div>
    </div>
  );
}

ViewLoginSocialMedia.propTypes = {
  history: PropTypes.objectOf(Object),
};

export default ViewLoginSocialMedia;
