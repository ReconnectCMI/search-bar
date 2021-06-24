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

function talkDirtyToMe(shortAudio, longAudio, isShort, soundTime) {
    // Old robot voice from TTS in browser API
    // const ut = new SpeechSynthesisUtterance(titleText + "" + descriptionText);
    // ut.rate = 0.8;
    // speechSynthesis.speak(ut);
    // Play our own mp3 files
    const audio = new Audio(shortAudio);
    audio.volume = 1;
    if(isShort) {
        audio.play();
    } else {
        const audioLong = new Audio(longAudio);
        const soundDelay = soundTime * 1000;
        audioLong.volume = 1;
        audio.play();

        setTimeout(function() {
            audioLong.play();
        }, soundDelay);
    }
}

function SpeakIcon(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton onClick={() => talkDirtyToMe(props.audio, props.audioLong, props.isShort, props.soundTime)} color="primary" aria-label="read text">
                <VolumeUp />
            </IconButton>
        </div>
    );
}

SpeakIcon.propTypes = {
    audio: PropTypes.string,
    audioLong: PropTypes.string,
    soundTime: PropTypes.number,
    isShort: PropTypes.bool,
    speak: PropTypes.object,
};

export default SpeakIcon;