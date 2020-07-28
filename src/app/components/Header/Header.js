import React from 'react';
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
