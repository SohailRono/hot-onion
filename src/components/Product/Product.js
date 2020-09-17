import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding:30,
    },
    media: {
        height: 250,
        width:'100%',
    },
});

const Product = (props) => {
    const classes = useStyles();
    const { id, foodname, tagname, img, price } = props.food;
    // console.log(props.food)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {foodname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {tagname}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">
                    $ {price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Product;