import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { loadPosts } from '../../../store/actions/postsActions';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import './Layout.css';

class Layout extends PureComponent {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { isLoading, posts, error, search } = this.props;
    let updatedPosts;

    if (isLoading) {
      return (
        <div className="Loading">
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
      <div className="Layout">
        <Search posts={updatedPosts} />
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
  bindActionCreators(
    {
      getPosts: loadPosts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

Layout.propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.array.isRequired,
  search: PropTypes.string,
  error: PropTypes.string,
};
