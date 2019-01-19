import {connect} from 'react-redux';
import Comment from './Comment';
import {deleteComment} from './actions';
import {thumbUpComment} from './actions';
import {thumbDownComment} from './actions'

const mapDispatchToProps = dispatch => ({
  deleteComment: (id) => dispatch(deleteComment(id)),
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))

});

export default connect(null, mapDispatchToProps)(Comment);
