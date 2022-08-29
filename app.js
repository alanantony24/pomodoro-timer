//App logic in JS goes here
// The data/time we want to countdown to

const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
  };
//Start
var mins = 25
var seconds = 0
var formattedseconds = ("0" + seconds).slice(-2);
document.getElementById("timerText").innerHTML = mins + ":" + formattedseconds;
function PomodoroMins(){
    mins = 25
    seconds = 0
    var formattedseconds = ("0" + seconds).slice(-2);
    document.getElementById("timerText").innerHTML = mins + ":" + formattedseconds;
  }

function ShortBreakMins() {
    mins = 5
    seconds = 0
    var formattedseconds = ("0" + seconds).slice(-2);
    document.getElementById("timerText").innerHTML = mins + ":" + formattedseconds;
}

function LongBreakMins() {
    mins = 15
    seconds = 0
    var formattedseconds = ("0" + seconds).slice(-2);
    document.getElementById("timerText").innerHTML = mins + ":" + formattedseconds;
  }

function Start(){
    interval = setInterval(function() {

            if(!seconds){
                mins--
                if(mins < 0){
                    clearInterval(interval); 
                    mins = 0
                    seconds = 1 // 1 as once it reaches 0, it will minus 1 again 
                    alert("Done");
                }
                else{
                    seconds = 60
                }
            }
            seconds--;
            var formattedseconds = ("0" + seconds).slice(-2);
            document.getElementById("timerText").innerHTML = mins + ":" + formattedseconds;
    },1000)
}

function Reset(){
    clearInterval(interval); 
    mins = 25
    seconds = 0
}