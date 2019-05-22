import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/postAction';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div class="post-form">
      <div class="post-form-header bg-primary">Comments</div>
      <form
        class="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          cols="25"
          rows="5"
          placeholder="Leave a comment"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input type="submit" value="Submit" class="btn btn-dark my-1" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
