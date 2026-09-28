const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");

const progress = document.getElementById("progress");

const volume = document.getElementById("volume");

let playing = false;

playBtn.onclick = () => {

    if(!playing){

        audio.play();

        playBtn.innerHTML = "⏸";

    }else{

        audio.pause();

        playBtn.innerHTML = "▶";

    }

    playing = !playing;
};

volume.oninput = () => {

    audio.volume = volume.value;
};

audio.ontimeupdate = ()=>{

    progress.value =
    (audio.currentTime/audio.duration)*100;
};

progress.oninput = ()=>{

    audio.currentTime =
    (progress.value/100)*audio.duration;
};