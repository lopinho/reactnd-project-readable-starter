import React, { Component } from 'react'

import  Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import MessageIcon from '@material-ui/icons/Message'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

import { formatDate } from '../utils/helpers'
import { registerUpVoteHandler } from '../actions/posts'
import { registerDownVoteHandler } from '../actions/posts'

class Post extends Component {
    upVote() {
        const { dispatch, id, voteScore } = this.props
        dispatch(registerUpVoteHandler(id, voteScore))
    }

    downVote() {
        const { dispatch, id, voteScore } = this.props
        dispatch(registerDownVoteHandler(id, voteScore))
    }

    render() {
        const {
            title, timestamp, body, author, commentCount, voteScore
        }  = this.props
        return (
            <Card style={{display: 'flex', alighItems: 'left', flexDirection: 'row', marginTop: '10px'}}>
                <CardActions style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'rgba(248, 249, 250)'}}>
                    <Button
                        size="small"
                        style={{marginLeft: 0}}
                        onClick={(e) => this.upVote()}
                    >
                        <ArrowUpward />
                    </Button>
                    <span style={{marginLeft: 0}}>{ voteScore }</span>
                    <Button
                        size="small"
                        style={{marginLeft: 0}}
                        onClick={(e) => this.downVote()}
                    >
                        <ArrowDownward />
                    </Button>
                </CardActions>
                <CardContent style={{display: 'flex', flexDirection: 'column', paddingBottom: 0}}>
                    <Typography color="textSecondary" variant="subtitle2">
                        Posted by { author } at {formatDate(timestamp)}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        { title }
                    </Typography>
                    <Typography variant="body2" component="p">
                        { body }
                    </Typography>

                    <Typography variant="subtitle2" component="span">
                        <MessageIcon  fontSize="small" />&nbsp;{commentCount}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default connect()(Post)
