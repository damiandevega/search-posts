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
    [theme.breakpoints.up('xs')]: {
      maxWidth: '95%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '65%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '55%',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '50%',
    },
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
  const [typing, setTyping] = useState(false);
  const { classes, posts } = props;

  const searchInputHandler = (event, text) => {
    let searchValue;
    if (event) {
      searchValue = event.target.value;
      setTyping(searchValue.length > 0)
    } else {
      searchValue = text;
      searchInput.current.value = searchValue;
      setTyping(false)
    }
    props.search(searchValue);
  };

  const autoCompleteClickHandler = (event) => {
    const selectedText = event.target.textContent;
    searchInputHandler(null, selectedText);
  };

  const highlightMatchingText = (title) => {
    const { searchValue } = props;
    return highlight(searchValue, title);
  };

  const highlight = (search, title) =>
    title.replace(
      new RegExp(search, 'gi'),
      (str) => `<strong style="background-color: rgb(255, 230, 0);">${str}</strong>`
    );

  return (
    <div className={classes.root}>
      <Input
        label="Search By Title"
        inputProps={{
          'aria-label': 'Search By Title',
          role: 'input',
          ref: searchInput,
        }}
        variant="outlined"
        color="primary"
        onChange={searchInputHandler}
        fullWidth
      />
      {typing && (
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
  bindActionCreators(
    {
      search: search,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(withStyles(styles)(memo(Search)));

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
