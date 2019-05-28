import React from 'react'
import { connect } from 'react-redux'
import Category from './Category'


class CategoryList extends React.Component {
    render () {
        const { categories } = this.props
        return (
            <div>
                <h1>Categories:</h1>
                <ul>
                    {categories.map((category, index) => <li key={index}><Category {...category} /></li>)}
                </ul>
            </div>
        )
    }

}

function mapStateToProps({categories}) {
    return {
        categories: categories
    }
}

export default connect(mapStateToProps)(CategoryList)

