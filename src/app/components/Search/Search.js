import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField } from '@material-ui/core';
// import AutoComplete from '../../HelperComponents/AutoComplete';
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
        {/* {autoComplete ? (
          <AutoComplete
            value={search}
            items={items}
            onChange={handleSearchInput}
          />
        ) : ( */}
        <TextField
          label="Search By Title"
          inputProps={{ 'aria-label': 'Search By Title' }}
          variant="outlined"
          color="primary"
          onChange={this.searchInputHandler}
          className="Search-input"
          fullWidth
        />
        {/* )} */}
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
