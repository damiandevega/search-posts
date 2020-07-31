import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { updatePost } from '../../store/actions/postsActions';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  post: {
    height: '280px',
    padding: '1rem',
    textAlign: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '1.3rem',
    margin: '1rem auto'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '55%',
    margin: '0.35rem auto'
  },
  input: {
    margin: '1rem auto',
    width: '90%',
    padding: '0.5rem',
    border: '1px solid #999',
    borderRadius: '3px'
  },
  textarea: {
    width: '90%',
    maxWidth: '90%',
    height: '140px',
    maxHeight: '140px',
    padding: '0.5rem',
    border: '1px solid #999',
    borderRadius: '3px'
  }
});

const titleTextInput = React.createRef();
const bodyTextInput = React.createRef();

const PostItem = (props) => {
  const [editing, setEditing] = useState(false);
  const { classes, id, title, body } = props;

  const editToggleHandler = () => {
    setEditing(!editing)
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const title = titleTextInput.current.value;
    const body = bodyTextInput.current.value;

    props.updatePost({
      id: id,
      title: title,
      body: body,
    });

    editToggleHandler();
  };

    return (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Paper>
          {!editing ? (
            <div className={classes.post} role="listitem">
              <Typography variant="h2" name="title" className={classes.header}>
                {title}
              </Typography>
              <Typography variant="body2" paragraph>
                {body}
              </Typography>
              <Button
                name="edit"
                variant="outlined"
                color="primary"
                onClick={editToggleHandler}
              >
                Edit
              </Button>
            </div>
          ) : (
            <div className={classes.post}>
              <form onSubmit={submitFormHandler}>
                <input
                  required
                  name="edit-input"
                  defaultValue={title}
                  ref={titleTextInput}
                  className={classes.input}
                />
                <textarea
                  required
                  name="edit-textarea"
                  defaultValue={body}
                  ref={bodyTextInput}
                  className={classes.textarea}
                />
                <div className={classes.buttonContainer}>
                  <Button type="submit" variant="outlined" color="primary" name="save">
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={editToggleHandler}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </Paper>
      </Grid>
    );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updatePost: updatePost }, dispatch);

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  updatePost: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(memo(PostItem)));
