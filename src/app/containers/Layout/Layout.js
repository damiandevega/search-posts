import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { loadPosts } from '../../../store/actions/postsActions';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import './Layout.css';

class Layout extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { isLoading, posts, error, search } = this.props;
    let updatedPosts;

    if (isLoading) {
      return <CircularProgress />;
    }

    if (error) {
      return (
        <h1>There was a problem loading the posts. Please try again later.</h1>
      );
    }

    if (search) {
      updatedPosts = posts.filter((post) => post.title.includes(search));
    } else {
      updatedPosts = posts;
    }

    return (
      <div className="Layout">
        <Search />
        <PostsList posts={updatedPosts} />
      </div>
    );
  }
}

const mapStateToProps = ({ posts, search }) => ({
  isLoading: posts.isLoading,
  posts: posts.posts,
  error: posts.error,
  search: search,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPosts: loadPosts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
