import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'


class PostList extends React.Component {
    render () {
        const { posts } = this.props

        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Post {...post} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

function mapStateToProps({posts}) {
    return {
        posts: posts
    }
}

export default connect(mapStateToProps)(PostList)
