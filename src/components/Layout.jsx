import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const Layout = ({ children, onPressBack, page, totalPages, color = 'white' }) => {
  return (
    <div className={`ai-layout ${color}`}>
      <div className="ai-layout__header">
        {page != undefined && totalPages != undefined && <div className="ai-layout__progress">
          <div style={{ width: `${Math.ceil(page / totalPages * 100)}%` }} />
        </div>}

        {onPressBack && <IconButton
          color="primary"
          aria-label="previous page"
          onClick={onPressBack}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>}
      </div>
      <div className="ai-layout__container">{children}</div>
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
  ]).isRequired,
  color: PropTypes.string,
};

export default Layout;
