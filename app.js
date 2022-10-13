//App logic in JS goes here
// The data/time we want to countdown to

const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    seconds: 0
};

var isTimerRunning = false
var mins = timer.pomodoro
var seconds = 0

// Setup
UpdateResetTime();
UpdateTimeDisplay();
document.getElementById("resetBtn").disabled = true;

function SetTime(timeMins) {
    mins = timeMins;
    seconds = timer.seconds;
    UpdateResetTime();      //  Save the current mins & seconds to reset to when Reset() is called.
    UpdateTimeDisplay();    //  Set timerText to the current time using the format {mins}:{seconds};
}

function Onclick_PomodoroBtn() {
    SetTime(timer.pomodoro);
}

function Onclick_ShortBreakBtn() {
    SetTime(timer.shortBreak);
}

function Onclick_LongBreakBtn() {
    SetTime(timer.longBreak);
}

function UpdateResetTime() {
    resetMins = mins;
    resetSeconds = seconds;
}

function UpdateTimeDisplay() {
    formattedseconds = ("0" + seconds).slice(-2);
    document.getElementById("timerText").innerHTML = `${mins}:${formattedseconds}`;
}

function ToggleTimer() {
    //document.getElementsByClassName("toggleStartPause")[0].textContent = "Pause"
    if (!isTimerRunning) {  //  If Timer is not running, we start it
        isTimerRunning = true
        document.getElementById("toggleBtn").textContent = "Pause"
        document.getElementById("resetBtn").disabled = true;
        interval = setInterval(function () {
            seconds--;              // Every 1000ms, seconds = seconds - 1
            if (seconds < 0) {
                mins--;         // After 60 secconds, mins = mins -1
                seconds = 59;   // Why not 60? >>> 0-59 gives us 60 seconds whereas 0-60 would give us 61 seconds
            }
            UpdateTimeDisplay();
            if (seconds == 0 && mins == 0) {
                clearInterval(interval);
                document.getElementById("resetBtn").disabled = false;
                document.getElementById("toggleBtn").textContent = "Start"
                alert("Done");
                Reset();
            }
            // old code
            // if (!seconds) {
            //     mins--
            //     if (mins < 0) {
            //         clearInterval(interval);
            //         mins = 0
            //         seconds = 1 // 1 as once it reaches 0, it will minus 1 again 
            //         alert("Done");
            //     }
            //     else {
            //         seconds = 60
            //     }
            // }
            // seconds--;
            // UpdateTimeDisplay();
        }, 1000)    // delay for each interval in milliseconds
    } else {    //  If Timer is running, we pause it
        clearInterval(interval)
        isTimerRunning = false
        document.getElementById("resetBtn").disabled = false;
        document.getElementById("toggleBtn").textContent = "Start"
        UpdateTimeDisplay();
    }
}

function Reset() {
    clearInterval(interval);
    mins = resetMins;
    seconds = resetSeconds;
    UpdateTimeDisplay();
}