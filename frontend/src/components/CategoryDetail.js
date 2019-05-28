import React from 'react'
import { connect } from 'react-redux'


import PostList from './PostList'


class CategoryDetail extends React.Component {
    render () {
        return (
            <PostList posts={this.props.posts} />
        )

    }
}

function mapStateToProps({ posts }, props) {
    const { path } = props.match.params
    posts = path ?
        posts.filter((post) => post.category === path) :
        []

    return {
       posts
    }
}

export default connect(mapStateToProps)(CategoryDetail)
