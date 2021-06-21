import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

function talkDirtyToMe(titleText, descriptionText) {
    const ut = new SpeechSynthesisUtterance(titleText + "" + descriptionText);
    speechSynthesis.speak(ut);
}

function SpeakIcon(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton onClick={() => talkDirtyToMe(props.title, props.description)} color="primary" aria-label="read text">
                <VolumeUp />
            </IconButton>
        </div>
    );
}

SpeakIcon.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    speak: PropTypes.object,
};

export default SpeakIcon;