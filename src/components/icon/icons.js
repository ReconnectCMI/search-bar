import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import SpeakIcon from '../Speak/SpeakIcon';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        minWidth: 300,
        margin: '20px 50px 20px 50px'
    },
    media: {
        height: 140,
    },
});

export default function Icon(props) {
    const classes = useStyles();

    return (
        //add the onclick to
        <Card className={classes.root} elevation={3}>
            <CardHeader 
                action={
                    <SpeakIcon speak={props.speech} title={props.title} description={props.description}/>
                }
            />
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

Icon.propTypes = {
    image: PropTypes.image,
    title: PropTypes.string,
    description: PropTypes.string,
    speech: PropTypes.object,
};