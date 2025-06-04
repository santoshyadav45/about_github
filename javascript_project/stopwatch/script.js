let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let secs = 0;
let mins = 0;

startbtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function(){
        clearInterval(timerId);
});

resetbtn.addEventListener('click', function(){
        clearInterval(timerId);
        timerdisplay.innerHTML = `00 : 00 : 00`;
        msec = secs = mins = 0;
});

let timerId = null;

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secsstring = secs < 10 ? `0${secs}` : msec;
    let minsstring = mins < 10 ? `0${mins}` : msec;

    timerdisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}` ;
}