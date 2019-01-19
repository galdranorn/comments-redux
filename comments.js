import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actionTypes'

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state.comments]
        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id)
        case EDIT_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes
                }
                , ... state]
        case THUMB_UP_COMMENT:
            return [
                {
                    id: action.id,
                    text,
                    votes: votes+=1
                }
                , ...state]
        case THUMB_DOWN_COMMENT:
            return [
                {
                    id: action.id,
                    text,
                    votes: votes-=1
                }
                , ...state]
        default:
            return state;
    }
}