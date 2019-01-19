import {connect} from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
})

export default connect (mapStateToProps, mapDispToProps) (CommentsList);

