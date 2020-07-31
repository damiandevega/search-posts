import React, { Fragment } from 'react';
import PropTypes, { shape, number, string } from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import PostItem from '../components/PostItem';

const styles = () => ({
  results: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0.5rem'
  },
  label: {
    fontWeight: 'bold'
  },
  text: {
    marginLeft: '0.3rem'
  },
  error: {
    fontSize: '32px',
    padding: '1rem',
    margin: '0 auto'
  }
});

const PostsList = ({ posts, classes }) => {
  return (
    <Fragment>
      <div className={classes.results}>
        <label className={classes.label} htmlFor="results-count">Results:</label>
        <Typography variant="body2" className={classes.text} name="results" id="results-count">{posts.length}</Typography>
      </div>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          ></PostItem>
        ))}
        {!posts.length && (
          <Typography variant="h2" className={classes.error}>No Posts Found From Search.</Typography>
        )}
      </Grid>
    </Fragment>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    shape({
      id: number,
      userid: number,
      title: string,
      body: string,
    })
  ).isRequired,
};

export default withStyles(styles)(PostsList);
