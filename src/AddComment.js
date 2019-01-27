import React from 'react';
import './AddComment.css';

const AddComment = ({addComment, commentText}) =>
  <li>
    <input id='commentBox' type='text' placeholder='Write your comment'/>
    <button onClick={() => addComment()}>Add comment</button>
  </li>;

export default AddComment;