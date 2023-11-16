var minTimeLimit = 10;
var secTimeLimit = minTimeLimit * 60;
var timer1 = document.getElementById("timer");

function startTimer() {
    secTimeLimit--;
    var minutes = Math.floor(secTimeLimit / 60);
    var seconds = secTimeLimit % 60;
    if (secTimeLimit < 0) {
    timer1.textContent = "00:00";
    clearInterval(timerInterval);
    return;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}
timer1.textContent = minutes + ":" + seconds;
}
var timerInterval = setInterval(startTimer, 1000);