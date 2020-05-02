import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Logo} from '../../assets/SVG/LogoWithoutText.svg';
import {ReactComponent as LogoText} from '../../assets/SVG/Deepvision.svg';

import './index.scss';

export const Header = () => {
  return (
    <div className="webapp-header">
      <Logo className='logo'/>
      <LogoText className='logo-text'/>
    </div>
  );
};

Header.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPressBack: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Header;
