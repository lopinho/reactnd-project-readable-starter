
const api = "//localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

function addIdAndTimestamp (obj) {
    obj.id = Math.random().toString(36).substring(2)
    obj.timestamp = Date.now()
}

export const getAllCategories = () => (
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
)

export const getCategoryPosts = (category) => (
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
)

export const createPost = (post) => {
    addIdAndTimestamp(post)
    const body = JSON.stringify(post)
    return fetch(`${api}/posts`, {
        headers: {...headers, 'Content-Type': 'application/json'},
        method: 'POST',
        body
    })
    .then(res => res.json())
}

export const getPost = (id) => (
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())
)

export const upVotePost = (id) => {
    const body = JSON.stringify({option: 'upVote'})
    return fetch(`${api}/posts/${id}`, {
        headers: {...headers, 'Content-Type': 'application/json'},
        method: 'POST',
        body
    })
        .then(res => res.json())
}

export const downVotePost = (id) => {
    const body = JSON.stringify({option: 'downVote'})
    return fetch(`${api}/posts/${id}`, {
        headers: {...headers, 'Content-Type': 'application/json'},
        method: 'POST',
        body
    })
        .then(res => res.json())
}

export const updatePost = (id, title, body) => (
    fetch(`${api}/posts/${id}`, {headers, method: 'PUT', body: JSON.stringify({title, body})})
        .then(res => res.json())
)

export const deletePost = (id) => (
    fetch(`${api}/posts/${id}`, {headers, method: 'DELETE'})
        .then(res => res.json())
)

export const getPostComments = (id) => (
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())
)

export const createComment = (comment) => {
    addIdAndTimestamp(comment)
    return fetch(`${api}/comments`, {headers, method: 'POST', body: JSON.stringify({comment})})
        .then(res => res.json())
}

export const getComment = (id) => (
    fetch(`${api}/comments/${id}`, { headers })
        .then(res => res.json())
)

export const upVoteComment = (id) => (
    fetch(`${api}/comments/${id}`, {headers, method: 'POST', body: JSON.stringify({option: 'upVote'})})
        .then(res => res.json())
)

export const downVoteComment = (id) => (
    fetch(`${api}/comments/${id}`, {headers, method: 'POST', body: JSON.stringify({option: 'downVote'})})
        .then(res => res.json())
)

export const updateComment = (id, timestamp, body) => (
    fetch(`${api}/posts/${id}`, {headers, method: 'PUT', body: JSON.stringify({timestamp, body})})
        .then(res => res.json())
)

export const deleteComment = (id) => (
    fetch(`${api}/comments/${id}`, {headers, method: 'DELETE'})
        .then(res => res.json())
)

export const getAllPosts = () => (
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
)

