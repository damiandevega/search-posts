import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes, { shape, number, string } from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { loadPosts } from '../../store/actions/postsActions';
import PostsList from '../../app/components/PostsList';
import Search from '../components/Search';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  root: {
    width: '96%',
    margin: '2rem auto'
  },
  loading: {
    margin: '5rem auto',
    textAlign: 'center',
  }
});

class Layout extends PureComponent {
  componentDidMount = () => {
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
        <h1>There was a problem loading the posts. Please try again later.</h1>
      );
    }

    if (search) {
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
