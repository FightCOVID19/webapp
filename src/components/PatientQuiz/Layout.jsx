import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const Layout = ({ children, onPressBack, page, totalPages }) => {
  return (
    <div className="ai-layout blue">
      <div className="ai-layout__header">
        <div className="ai-layout__progress">
          <div style={{ width: `${Math.ceil(page / totalPages * 100)}%` }} />
        </div>

        <IconButton
          color="primary"
          aria-label="previous page"
          onClick={onPressBack}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="ai-layout__content">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPressBack: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
