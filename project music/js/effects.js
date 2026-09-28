const album =
    document.getElementById("albumCover");

const glow =
    document.getElementById("backgroundGlow");


// =====================================================
// BEAT DETECTION SETTINGS
// =====================================================

const beatSettings = {

    // How sensitive the beat detection is
    sensitivity: 1.25,

    // Minimum bass level
    minimumBass: 70,

    // Minimum increase between frames
    minimumIncrease: 12,

    // Time between beats
    cooldown: 120

};


// =====================================================
// BEAT VARIABLES
// =====================================================

let averageBass = 0;

let previousBass = 0;

let beatCooldown = 0;


// =====================================================
// GET FREQUENCY AVERAGE
// =====================================================

function getAverageFrequency(start, end) {

    // If audio isn't initialized yet
    if (!window.audioData) {
        return 0;
    }


    let total = 0;

    let count = 0;


    // Don't go outside the array
    end = Math.min(
        end,
        window.audioData.length
    );


    for (
        let i = start;
        i < end;
        i++
    ) {

        total +=
            window.audioData[i];

        count++;

    }


    if (count === 0) {
        return 0;
    }


    return total / count;

}


// =====================================================
// BEAT DETECTION
// =====================================================

function detectBeat(bass) {

    // Slowly learn the normal bass level
    averageBass +=
        (bass - averageBass) * 0.02;


    // How much did bass increase?
    const increase =
        bass - previousBass;


    // How much stronger is bass
    // compared to the average?
    const ratio =
        bass /
        Math.max(
            averageBass,
            1
        );


    // Cooldown
    if (beatCooldown > 0) {

        beatCooldown--;

    }


    // Conditions
    const loudEnough =
        bass >
        beatSettings.minimumBass;


    const suddenIncrease =
        increase >
        beatSettings.minimumIncrease;


    const aboveAverage =
        ratio >
        beatSettings.sensitivity;


    // BEAT
    if (
        loudEnough &&
        suddenIncrease &&
        aboveAverage &&
        beatCooldown <= 0
    ) {

        const strength =
            Math.min(
                ratio / 2,
                1
            );


        triggerBeat(strength);


        // Prevent multiple triggers
        // from the same kick
        beatCooldown =
            beatSettings.cooldown / 16.67;

    }


    previousBass = bass;

}


// =====================================================
// BEAT EFFECT
// =====================================================

function triggerBeat(strength) {

    console.log(
        "💥 BEAT!",
        "Strength:",
        strength.toFixed(2)
    );


    // =================================================
    // ALBUM PULSE
    // =================================================

    if (album) {

        album.animate(

            [
                {
                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        `scale(${1 + strength * 0.15})`
                },

                {
                    transform:
                        "scale(1)"
                }
            ],

            {
                duration: 150,
                easing: "ease-out"
            }

        );

    }


    // =================================================
    // SCREEN PULSE
    // =================================================

    document.body.animate(

        [
            {
                transform:
                    "scale(1)"
            },

            {
                transform:
                    `scale(${1 + strength * 0.01})`
            },

            {
                transform:
                    "scale(1)"
            }
        ],

        {
            duration: 100,
            easing: "ease-out"
        }

    );


    // =================================================
    // BACKGROUND FLASH
    // =================================================

    if (glow) {

        glow.animate(

            [
                {
                    opacity: 0.3
                },

                {
                    opacity: 0.9
                },

                {
                    opacity: 0.3
                }
            ],

            {
                duration: 180,
                easing: "ease-out"
            }

        );

    }

}


// =====================================================
// MAIN EFFECT LOOP
// =====================================================

function animateEffects() {

    requestAnimationFrame(
        animateEffects
    );


    // Audio hasn't started yet
    if (
        !window.audioAnalyser ||
        !window.audioData
    ) {

        return;

    }


    // Get current music frequencies
    window.audioAnalyser.getByteFrequencyData(
        window.audioData
    );


    // =================================================
    // FREQUENCY RANGES
    // =================================================

    const bass =
        getAverageFrequency(
            0,
            12
        );


    const mid =
        getAverageFrequency(
            12,
            60
        );


    const treble =
        getAverageFrequency(
            60,
            120
        );


    // =================================================
    // CONTINUOUS BASS EFFECT
    // =================================================

    if (album) {

        const scale =
            1 +
            (bass / 255) *
            0.04;


        album.style.transform =
            `scale(${scale})`;

    }


    // =================================================
    // BACKGROUND EFFECT
    // =================================================

    if (glow) {

        const opacity =
            0.2 +
            (bass / 255) *
            0.5;


        glow.style.opacity =
            opacity;

    }


    // =================================================
    // BEAT DETECTION
    // =================================================

    detectBeat(bass);

}


animateEffects();