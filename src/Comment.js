import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, deleteComment, thumbUpComment, thumbDownComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => deleteComment(id)}>Delete</button>
  </li>;

export default Comment;
