import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes, { shape, number, string } from 'prop-types';
import { Input } from '@material-ui/core';
import { search } from '../../store/actions/searchActions';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  root: {
    position: 'relative',
    margin: '0 auto 1.8rem auto',
    maxWidth: '50%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '95%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '85%',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '55%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '50%',
    },
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  autocompleteContainer: {
    backgroundColor: '#fdfefe',
    border: '1px solid lightgray',
    padding: '0.1rem 0',
    width: '100%',
    margin: '0 auto',
    position: 'absolute',
    textAlign: 'left',
    zIndex: 100
  },
  autocompleteItem: {
    padding: '0.5rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'black'
    }
  },
});

const searchInput = React.createRef();

const Search = (props) => {
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const { classes, posts } = props;

  const searchInputHandler = (event, text) => {
    let searchValue;
    if (event) {
      searchValue = event.target.value;
      setShowAutocomplete(searchValue.length > 0)
    } else {
      searchValue = text;
      searchInput.current.value = searchValue;
      setShowAutocomplete(false)
    }
    // updates search value to store
    props.search(searchValue);
  };

  const autoCompleteClickHandler = (event) => {
    const selectedText = event.target.textContent;
    // updates input field to user selected item from autocomplete
    searchInputHandler(null, selectedText);
  };

  const highlightMatchingText = (title) => {
    const { searchValue } = props;
    // highlights matching text in autocomplete fields for better user experience
    return highlight(searchValue, title);
  };

  const highlight = (search, title) =>
    title.replace(
      new RegExp(search, 'gi'),
      (str) => `<strong style="background-color: rgb(255, 230, 0);">${str}</strong>`
    );

  return (
    <div className={classes.root}>
      <label htmlFor="search-id" className={classes.label}>Search By Title:</label>
      <Input
        label="Search By Title"
        inputProps={{
          id: 'search-id',
          'aria-label': 'Search By Title',
          role: 'input',
          ref: searchInput,
        }}
        variant="outlined"
        color="primary"
        onChange={searchInputHandler}
        fullWidth
      />
      {showAutocomplete && posts.length > 0 && (
        <div className={classes.autocompleteContainer}>
          {posts.map((post) => (
            <div
              key={post.id}
              role="menuitem"
              className={classes.autocompleteItem}
              onClick={autoCompleteClickHandler}
              dangerouslySetInnerHTML={{
                __html: highlightMatchingText(post.title),
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ search: search }, dispatch);

Search.propTypes = {
  search: PropTypes.func,
  searchValue: PropTypes.string,
  posts: PropTypes.arrayOf(
    shape({
      id: number,
      userid: number,
      title: string,
      body: string,
    })
  )
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(memo(Search)));
