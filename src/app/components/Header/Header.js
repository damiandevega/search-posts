import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import './Header.css';

const Header = ({ title }) => (
  <header className="Header">
    <Typography variant="h4" align="center">
      {title}
    </Typography>
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
