import {connect} from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: state.comments,
  commentText: state.commentText
});

export default connect (mapStateToProps) (CommentsList);

