import React from 'react'

import  Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import MessageIcon from '@material-ui/icons/Message'
import Button from '@material-ui/core/Button';

import { formatDate } from '../utils/helpers'


export default function post(props) {

    const {
        title, id, timestamp, body, author, commentCount, voteScore
    }  = props

    return (
        <Card style={{display: 'flex', alighItems: 'left', flexDirection: 'row', marginTop: '10px'}}>
            <CardActions style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'rgba(248, 249, 250)'}}>
                <Button size="small" style={{marginLeft: 0}}><ArrowUpward /></Button>
                <span style={{marginLeft: 0}}>{ voteScore }</span>
                <Button size="small" style={{marginLeft: 0}}><ArrowDownward /></Button>
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

                <Typography variant="subtitle2" component="p">
                    <Button variant="text" style={{flexDirection: 'row'}}> <MessageIcon  fontSize="small" />&nbsp;{commentCount}</Button>
                </Typography>
            </CardContent>
        </Card>
    )
}
