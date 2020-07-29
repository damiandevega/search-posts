import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { search } from '../../../store/actions/searchActions';
import './Search.css';

class Search extends PureComponent {
  state = {
    typing: false,
  };

  searchInput = React.createRef();

  searchInputHandler = (event, text) => {
    let searchValue;
    if (event) {
      searchValue = event.target.value;
      this.setState({ typing: searchValue.length > 0 });
    } else {
      searchValue = text;
      this.searchInput.current.value = searchValue;
      this.setState({ typing: false });
    }
    this.props.search(searchValue);
  };

  autoCompleteClickHandler = (event) => {
    const selectedText = event.target.textContent;
    this.searchInputHandler(null, selectedText);
  };

  highlightMatchingText = (title) => {
    const { searchValue } = this.props;
    return this.highlight(searchValue, title);
  };

  highlight = (needle, haystack) =>
    haystack.replace(
      new RegExp(needle, 'gi'),
      (str) => `<strong class="Search-autocomplete-highlight">${str}</strong>`
    );

  render() {
    const { posts } = this.props;
    const { typing } = this.state;
    return (
      <div className="Search">
        <TextField
          className="Search-input"
          label="Search By Title"
          inputProps={{
            'aria-label': 'Search By Title',
            'data-testid': 'search-textfield',
            ref: this.searchInput,
          }}
          variant="outlined"
          color="primary"
          onChange={this.searchInputHandler}
          fullWidth
        />
        {typing && (
          <div className="Search-autocomplete-container">
            {posts.map((post) => (
              <div
                key={post.id}
                className="Search-autocomplete-item"
                onClick={this.autoCompleteClickHandler}
                dangerouslySetInnerHTML={{
                  __html: this.highlightMatchingText(post.title),
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      search: search,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Search);

Search.propTypes = {
  search: PropTypes.func,
  searchValue: PropTypes.string,
  posts: PropTypes.array,
};
