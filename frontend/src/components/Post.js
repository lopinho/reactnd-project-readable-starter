import React from 'react'

function post(props) {
    const {
        title, id, timestamp, body, author
    }  = props

    return (
        <div>
            <h2>{ title }</h2>
            <h4>{ author }</h4>
            <span>{ body }</span>
        </div>
    )
}

export default post
