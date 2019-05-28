import React from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'

import Post from './Post'


class PostList extends React.Component {
    render () {
        const { posts } = this.props

        return (
            <Container>
                <Typography variant="h4" component="h2" align="center">
                    Posts
                </Typography>
                {posts.map((post) => (
                        <Post key={ post.id } {...post} />
                ))}
            </Container>
        )
    }

}

function mapStateToProps(state, props) {
    return {
        posts: props.posts || []
    }
}

export default connect(mapStateToProps)(PostList)
