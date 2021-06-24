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
import Grid from '@material-ui/core/Grid';
import './icons.css';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 250,
        margin: '20px 20px 20px 20px',
        maxWidth: 250,
        maxHeight: 350,
        minHeight: 350,
    },
    media: {
        height: 150,
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
        padding: theme.spacing(1.5, 1.5, 3),
        width: '60%',
        height: 'auto',

    },
}));

export default function Icon (props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
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
                    <SpeakIcon soundTime={props.soundTime} audio={props.audio} isShort={true} title={props.title} description={props.description} />
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
                        <div className="CloseButton">
                            <IconButton onClick={handleClose} color="inherit" aria-label="sluiten">
                                <Cancel />
                            </IconButton>
                        </div>
                        <Grid container spacing={3} className="ModalGrid">
                            <Grid item xs={8} className="ModelItem">
                                <Typography variant="h6">
                                    <p className="TitleModel">{props.title}</p>
                                </Typography>
                                <Typography variant="body2">
                                    {props.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} className="ModelItem2">
                                <Typography variant="h6">
                                <p className="TitleModel">Meer informatie</p>
                                </Typography>
                                <Typography variant="body2">
                                    {props.moreInfo}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className="ModalGridButtons">
                            <Grid item xs={11} className="ModelItem">
                                <Button target="_blank" href={props.link} variant="contained" color="primary" disableElevation>
                                    <img width="100px" src={toetsenbordIcon} />
                                    <p className="IconText">Zelf invullen</p>
                                </Button>
                                <Button target="_blank" href="https://digitalebalie.rotterdam.nl/" variant="contained" color="primary" disableElevation>
                                    <img width="93px" src={videogesprekIcon} />
                                    <p className="IconText">Via de digitale balie</p>
                                </Button>
                            </Grid>
                            <Grid item xs={1} className="ModelItem">
                                <SpeakIcon soundTime={props.soundTime} audio={props.audio} audioLong={props.audioLong} isShort={false} title={props.title} description={props.description + " U kunt er voor kiezen om het zelf in te vullen of om het te doen online via de digitale balie"} />
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="h2">
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
    moreInfo: PropTypes.string,
    speech: PropTypes.object,
    link: PropTypes.string,
    audio: PropTypes.string,
    audioLong: PropTypes.string,
    soundTime: PropTypes.number,
};
