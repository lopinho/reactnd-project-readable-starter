import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { getInitialDataHandler } from '../actions/shared'

import CategoryList from './CategoryList'
import CategoryDetail from './CategoryDetail'


class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getInitialDataHandler())
    }
    render () {
        return (
            <Router>
                <Route path="/" exact component={CategoryList} />
                <Route path="/categories/:path" component={CategoryDetail} />
            </Router>
        )
    }
}

export default connect()(App)
