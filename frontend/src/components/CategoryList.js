import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';


import Category from './Category'


const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));


function CategoryList(props){
    const { categories } = props
    const classes = useStyles()
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography gutterBottom variant="h2" component="h2" align="center">
                Choose a category
            </Typography>
            <Grid container spacing={4}>
                {categories.map((category, index) => <Category {...category} />)}
            </Grid>
        </Container>
    )

}

function mapStateToProps({categories}) {
    return {
        categories: categories
    }
}

export default connect(mapStateToProps)(CategoryList)

