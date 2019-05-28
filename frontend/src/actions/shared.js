import { getAllCategories } from '../utils/Api'
import { getAllPosts } from '../utils/Api'
import { receiveCategories } from '../actions/categories'
import { receivePosts } from '../actions/posts'


export function getInitialDataHandler() {
    return (dispatch) => {
        Promise.all([
            getAllCategories(),
            getAllPosts(),
        ])
        .then(([categories, posts, comments]) => {
            dispatch(receiveCategories(categories))
            dispatch(receivePosts(posts))
        })

    }
}
