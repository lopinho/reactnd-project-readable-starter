import React from 'react';
import { connect } from 'react-redux'
import { Router } from 'react-router-dom'

import { getInitialDataHandler } from '../actions/shared'

import CategoryList from './CategoryList'
import PostList from './PostList'


class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getInitialDataHandler())
    }
    render () {
        return (
            <div>
                <PostList />
                <CategoryList />
            </div>
        )
    }
}

export default connect()(App)
