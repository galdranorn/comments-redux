import uuid from 'uuid';
import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actionTypes'

//actions creators
function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text
  }
};
function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text,
  }
};
function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
};
function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
};
function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
};

// bound action creator
const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundthumbUpComment = id => dispatch(thumbUpComment(id));
const boundthumbDownComment = id => dispatch(thumbDownComment(id));