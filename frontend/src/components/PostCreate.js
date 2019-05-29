import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import IconSend from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

import {createNewPostHandler} from '../actions/posts'


export default connect()(function PostCreate(props) {
    console.log(props)
    const [values, setValues] = React.useState({
        title: '',
        body: '',
      });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const { dispatch } = props

    return (
        <Container style={{paddingTop: '30px'}}>
            <Typography gutterBottom variant="h4" component="h2" align="center">
                New post
            </Typography>

            <form style={{display: 'flex', flexWrap: 'wrap'}}>
                <TextField
                    label="title"
                    placeholder="Title goes here ;)"
                    value={values.title}
                    style={{ margin: 8 }}
                    onChange={handleChange('title')}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="message"
                    placeholder="Enter your message"
                    margin="normal"
                    value={values.body}
                    onChange={handleChange('body')}
                    fullWidth
                    multiline
                    rows="10"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={ (e) => dispatch(createNewPostHandler(values.title, values.body, props.category.path))}
                >
                    Send&nbsp;<IconSend />
                </Button>

            </form>
        </Container>
    )
})
