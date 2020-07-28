import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PostItem from '../PostItem/PostItem';

const PostsList = ({ posts }) => {
  return (
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
  );
};

export default PostsList;

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
