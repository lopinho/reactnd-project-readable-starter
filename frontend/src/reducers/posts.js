import { RECEIVE_POSTS, CHANGE_VOTE, NEW_POST } from '../actions/posts'

function posts(state = [], action) {
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case NEW_POST:
            return state.concat([action.post])
        case CHANGE_VOTE:
            return state.map((post) => (
                post.id !== action.id
                ? post
                : Object.assign({}, post, {voteScore: action.votes})

            ))
        default:
            return state
    }
}

export default posts
