import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PostItem from '../PostItem/PostItem';
import './PostsList.css';

const PostsList = ({ posts }) => {
  return (
    <Fragment>
      <div className="Results">
        <strong>Results:</strong> {posts.length}
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
      </Grid>
    </Fragment>
  );
};

export default PostsList;

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
