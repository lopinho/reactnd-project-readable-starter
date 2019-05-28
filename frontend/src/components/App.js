import React from 'react';
import { getInitialDataHandler } from '../actions/shared'
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import { Router } from 'react-router-dom'

class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getInitialDataHandler())
    }
    render () {
        return (
            <div>
                <CategoryList />
            </div>
        )
    }
}

export default connect()(App)
