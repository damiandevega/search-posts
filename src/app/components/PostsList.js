import React, { Fragment } from 'react';
import PropTypes, { shape, number, string } from 'prop-types';
import { Grid } from '@material-ui/core';
import PostItem from '../components/PostItem';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  results: {
    float: 'right',
    padding: '0.5rem'
  },
  text: {
    display: 'inline',
    marginLeft: '0.3rem'
  },
  center: {
    margin: '0 auto'
  }
});

const PostsList = ({ posts, classes }) => {
  return (
    <Fragment>
      <div className={classes.results}>
        <strong>Results:</strong>
        <p className={classes.text}>{posts.length}</p>
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
          <h1 className={classes.center}>No Posts Found From Search.</h1>
        )}
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(PostsList);

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
