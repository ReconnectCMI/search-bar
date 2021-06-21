import Speech from 'speak-tts';

// Check for browser support and initilize the speech component
const speech = new Speech()

speech.init({
    'volume': 1,
    'rate': 1,
    'pitch': 1,
    'splitSentences': true,
}).then((data) => {
    // The "data" object contains the list of available voices and the voice synthesis params
    console.log("Speech is ready, voices are available", data)
}).catch(e => {
    console.error("An error occured while initializing : ", e)
})

export { speech };