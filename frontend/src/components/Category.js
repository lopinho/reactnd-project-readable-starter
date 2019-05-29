import React from 'react'
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        padding: '10px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

function Category (props) {
    const classes = useStyles()
    const { name, path, image } = props

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Link href={`/categories/${path}`} underline="none">
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h2" component="h2" align="center">
                            { name }
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className={classes.cardMedia}
                        image={image}
                        title={`${name} logo`}
                    />
                </Card>
            </Link>
        </Grid>
    )
}

export default Category
