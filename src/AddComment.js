import React from 'react';
import './AddComment.css';

const AddComment = ({addComment}) =>
  <li>
    <input id='commentBox' type='text' placeholder='Write your comment'/>
    <button onClick={() => addComment(text)}>Add comment</button>
  </li>;

export default AddComment;