import React from 'react'
import { Link } from 'react-router-dom'

function category (props) {
    const { name, path } = props
    return (
        <h1>{ name }</h1>
    )
}

export default category
