import { upVotePost, downVotePost, createPost } from '../utils/Api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CHANGE_VOTE = 'CHANGE_VOTE'
export const NEW_POST = 'NEW_POST'

export function changePostVote(id, votes) {
    return {
        type: CHANGE_VOTE,
        id,
        votes
    }
}

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts
    }
}

export function saveNewPost(post) {
    return {
        type: NEW_POST,
        post
    }
}

export function registerUpVoteHandler(id, votes) {
    return (dispatch) => {
        dispatch(changePostVote(id, votes+1))
        upVotePost(id)
            .catch((err) => {
                dispatch(changePostVote(id, votes))
            })


    }
}

export function registerDownVoteHandler(id, votes) {
    return (dispatch) => {
        dispatch(changePostVote(id, votes - 1))
        downVotePost(id)
            .catch((err) => {
                dispatch(changePostVote(id, votes))
            })


    }
}

export function createNewPostHandler(title, body, category) {
    const post = {
        title,
        body,
        category
    }
    return (dispatch, getState) => {
        const { authedUser } = getState()
        post.author = authedUser || 'thingtwo'
        createPost(post)
            .then((post) => dispatch(saveNewPost(post)))
    }
}
