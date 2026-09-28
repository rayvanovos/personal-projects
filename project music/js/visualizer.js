const audio = document.getElementById("audio");
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

// Shared audio variables
window.audioContext = null;
window.audioAnalyser = null;
window.audioSource = null;
window.audioData = null;

let audioInitialized = false;


// =====================================================
// CANVAS
// =====================================================

function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// =====================================================
// INITIALIZE AUDIO
// =====================================================

function initializeAudio() {

    // Don't create the AudioContext twice
    if (audioInitialized) {
        return;
    }

    console.log("Initializing audio analyzer...");

    window.audioContext = new AudioContext();

    window.audioAnalyser =
        window.audioContext.createAnalyser();

    // Frequency resolution
    window.audioAnalyser.fftSize = 512;

    // Smooth the visualizer
    window.audioAnalyser.smoothingTimeConstant = 0.75;

    const bufferLength =
        window.audioAnalyser.frequencyBinCount;

    window.audioData =
        new Uint8Array(bufferLength);


    // Connect the HTML audio element
    window.audioSource =
        window.audioContext.createMediaElementSource(audio);


    // Audio → Analyzer
    window.audioSource.connect(
        window.audioAnalyser
    );


    // Analyzer → Speakers
    window.audioAnalyser.connect(
        window.audioContext.destination
    );


    audioInitialized = true;

    console.log("Audio analyzer ready!");

}


// =====================================================
// START AUDIO ANALYSIS WHEN SONG PLAYS
// =====================================================

audio.addEventListener("play", async () => {

    initializeAudio();

    if (
        window.audioContext &&
        window.audioContext.state === "suspended"
    ) {

        await window.audioContext.resume();

    }

    console.log(
        "AudioContext:",
        window.audioContext.state
    );

});


// =====================================================
// VISUALIZER
// =====================================================

function drawVisualizer() {

    requestAnimationFrame(drawVisualizer);

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Audio hasn't started yet
    if (
        !window.audioAnalyser ||
        !window.audioData
    ) {
        return;
    }


    // Get actual frequency data
    window.audioAnalyser.getByteFrequencyData(
        window.audioData
    );


    const barCount = 40;

    const barWidth =
        canvas.width / barCount;


    for (
        let i = 0;
        i < barCount;
        i++
    ) {

        const index =
            Math.floor(
                i *
                window.audioData.length /
                barCount
            );


        const value =
            window.audioData[index];


        const barHeight =
            (value / 255) *
            canvas.height;


        ctx.fillStyle = "crimson";


        ctx.fillRect(

            i * barWidth,

            canvas.height - barHeight,

            barWidth - 3,

            barHeight

        );

    }

}

drawVisualizer();