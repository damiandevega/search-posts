import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { search } from '../../../store/actions/searchActions';
import './Search.css';

class Search extends Component {
  searchInputHandler = (event) => {
    const searchValue = event.target.value;
    this.props.search(searchValue);
  };

  render() {
    return (
      <div className="Search">
        <TextField
          label="Search By Title"
          inputProps={{
            'aria-label': 'Search By Title',
            'data-testid': 'search-textfield',
          }}
          variant="outlined"
          color="primary"
          onChange={this.searchInputHandler}
          className="Search-input"
          fullWidth
        />
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
  posts: PropTypes.array,
};
