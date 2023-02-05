const app = require('./index.js');
const input = document.querySelector("input");
const timerDisplay = document.querySelector("#timer");
const defaultTimers = document.querySelectorAll(".default-timer");

let countdown;

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  countdown = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      display.textContent = "Time's up!";
    }
  }, 1000);
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    clearInterval(countdown);
    let minutes = parseInt(input.value) || 0;
    let endTime = new Date(new Date().getTime() + minutes * 60 * 1000);
    timerDisplay.textContent = "Ends at: " + endTime.toLocaleTimeString();
    startTimer(minutes * 60, timerDisplay);
  }
});

defaultTimers.forEach(function(defaultTimer) {
  defaultTimer.addEventListener("click", function() {
    clearInterval(countdown);
    let minutes = parseInt(defaultTimer.dataset.time) || 0;
    let endTime = new Date(new Date().getTime() + minutes * 60 * 1000);
    timerDisplay.textContent = "Ends at: " + endTime.toLocaleTimeString();
    startTimer(minutes * 60, timerDisplay);
  });
});

app.listen(3000, () => {
  console.log('server started');
});
