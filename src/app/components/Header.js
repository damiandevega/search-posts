import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '1rem 0',
  },
  h1: {
    fontSize: '36px',
  }
});

const Header = ({ title, classes }) => (
  <header className={classes.root}>
    <Typography variant="h1" align="center" className={classes.h1}>
      {title}
    </Typography>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
