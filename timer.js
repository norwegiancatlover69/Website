//https://codepen.io/luci/pen/EEavVR
//Random time from 10 to 20 minutes
let randNumber = Math.floor(Math.random()*11) + 10;
//Timer
document.getElementById("timer").innerHTML = randNumber + ":00";
let minTimeLimit = randNumber;
let secTimeLimit = minTimeLimit * 60;
let timer1 = document.getElementById("timer");
//Update
function startTimer() {
    secTimeLimit--;
    let minutes = Math.floor(secTimeLimit / 60);
    let seconds = secTimeLimit % 60;
    if (secTimeLimit < 0) {
        timer1.innerHTML = "00:00";
        clearInterval(timerInterval);
        alert("Your food is ready!")
        return;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timer1.innerHTML = minutes + ":" + seconds;
    }
//Update every second
let timerInterval = setInterval(startTimer, 1000);