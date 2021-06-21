import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import SpeakIcon from '../Speak/SpeakIcon';
import SpeakIcon from '../Speak/SpeakIcon';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import toetsenbordIcon from '../../img/toetsenbord.png';
import videogesprekIcon from '../../img/videogesprek.png';

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: 250,
        margin: '20px 50px 20px 50px'
        maxWidth: 250,
    },
    media: {
        height: 100,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '80%',
        height: '70%',
    },
}));

export default function Icon(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
    
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardHeader 
              action={
                  <SpeakIcon speak={props.speech} title={props.title} description={props.description}/>
                }
            />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">{props.title}</h2>
                    <p id="transition-modal-description">{props.description}</p>
                    <Button target="_blank" href={props.link} variant="contained" color="primary" disableElevation>
                        <img width="100px" src={toetsenbordIcon}/>
                        Zelf invullen
                    </Button>
                    <Button target="_blank" href="https://digitalebalie.rotterdam.nl/" variant="contained" color="primary" disableElevation>
                        <img width="93px" src={videogesprekIcon}/>
                        Via de digitale balie
                    </Button>
                    <SpeakIcon speak={props.speech} title={props.title} description={props.description + " U kunt er voor kiezen om het zelf in te vullen of om het te doen online via de digitale balie"}/>
                </div>
                </Fade>
            </Modal>
   
            <CardActionArea onClick={handleOpen}>
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
    link: PropTypes.string,
};