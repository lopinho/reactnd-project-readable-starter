import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'


import Category from './Category'
import PostList from './PostList'
import PostCreate from './PostCreate'


class CategoryDetail extends React.Component {
    render () {
        const { category, posts, id } = this.props
        return (
            <Container >
                {category
                ? (
                    <Grid container>
                        <Grid item xs={12} align="center" style={{paddingBottom: '30px'}}>
                            <Category {...category } align="center"/>
                        </Grid>
                    </Grid>
                )
                : null
                }
                <PostList posts={posts} />
                <PostCreate category={category} />
            </Container>
        )

    }
}

function mapStateToProps({ posts, categories }, props) {
    const { path } = props.match.params
    const category = categories.filter((c) => c.path === path)
    posts = path ?
        posts.filter((post) => post.category === path) :
        []

    return {
        posts,
        category: category.length === 1
        ? category[0]
        : null
    }
}

export default connect(mapStateToProps)(CategoryDetail)
