import React, { PureComponent } from 'react';
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

class PostItem extends PureComponent {
  state = {
    editing: false,
  };

  titleTextInput = React.createRef();
  bodyTextInput = React.createRef();

  editToggleHandler = () => {
    this.setState({ editing: !this.state.editing });
  };

  submitFormHandler = (event) => {
    event.preventDefault();

    const title = this.titleTextInput.current.value;
    const body = this.bodyTextInput.current.value;

    this.props.updatePost({
      id: this.props.id,
      title: title,
      body: body,
    });

    this.editToggleHandler();
  };

  render() {
    const { classes, id, title, body } = this.props;
    const { editing } = this.state;

    return (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Paper>
          {!editing ? (
            <div className={classes.post} role="listitem">
              <Typography variant="h6">
                <div className={classes.header}>{title}</div>
              </Typography>
              <Typography variant="body2" paragraph>
                {body}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.editToggleHandler}
              >
                Edit
              </Button>
            </div>
          ) : (
            <div className={classes.post}>
              <form onSubmit={this.submitFormHandler}>
                <input
                  required
                  defaultValue={title}
                  ref={this.titleTextInput}
                  className={classes.input}
                />
                <textarea
                  required
                  defaultValue={body}
                  ref={this.bodyTextInput}
                  className={classes.textarea}
                />
                <div className={classes.buttonContainer}>
                  <Button type="submit" variant="outlined" color="primary">
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this.editToggleHandler}
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
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updatePost: updatePost,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(withStyles(styles)(PostItem));

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  updatePost: PropTypes.func.isRequired,
};
