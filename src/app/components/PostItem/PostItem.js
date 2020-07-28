import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { updatePost } from '../../../store/actions/postsActions';
import './PostItem.css';

class PostItem extends Component {
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
    const { id, title, body } = this.props;
    const { editing } = this.state;

    return (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Paper>
          {!editing ? (
            <div className="PostItem">
              <Typography variant="h6">
                <div className="PostItem-header">{title}</div>
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
            <div className="PostItem">
              <form onSubmit={this.submitFormHandler}>
                <input
                  required
                  defaultValue={title}
                  ref={this.titleTextInput}
                  className="PostItem-input"
                />
                <textarea
                  required
                  defaultValue={body}
                  ref={this.bodyTextInput}
                  className="PostItem-textarea"
                />
                <div className="PostItem-btn-container">
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

export default connect(null, mapDispatchToProps)(PostItem);
