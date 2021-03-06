import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes, { shape, number, string } from 'prop-types';
import { CircularProgress, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Search from '../components/Search';
import PostsList from '../../app/components/PostsList';
import { loadPosts } from '../../store/actions/postsActions';

const styles = () => ({
  root: {
    width: '96%',
    margin: '2rem auto'
  },
  loading: {
    margin: '5rem auto',
    textAlign: 'center',
  },
  error: {
    fontSize: '32px',
    padding: '1rem',
  }
});

class Layout extends PureComponent {
  componentDidMount = () => {
    // fetch posts from api and receive posts as props via mapStateToProps
    this.props.getPosts();
  };

  render() {
    const { classes, isLoading, posts, error, search } = this.props;
    let updatedPosts;

    if (isLoading) {
      return (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return (
        <Typography variant="h2" className={classes.error}>There was a problem loading the posts. Please try again later.</Typography>
      );
    }

    if (search) {
      // filter posts based on search input value
      updatedPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      updatedPosts = posts;
    }

    return (
      <div className={classes.root}>
        <Search posts={updatedPosts} searchValue={search} />
        <PostsList posts={updatedPosts} />
      </div>
    );
  }
}

const mapStateToProps = ({ posts, search }) => ({
  isLoading: posts.isLoading,
  posts: posts.posts,
  search: search,
  error: posts.error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getPosts: loadPosts }, dispatch);

Layout.propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.arrayOf(
    shape({
      id: number,
      userid: number,
      title: string,
      body: string,
    })
  ).isRequired,
  search: PropTypes.string,
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));
