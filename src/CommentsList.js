import React from 'react';
import Comment from './CommentContainer';
import AddComment from './AddCommentContainer';

const CommentsList = ({comments, commentText}) => <ul><AddComment commentText={commentText}/>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;
