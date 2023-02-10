const input = document.querySelector("input");
const timerDisplay = document.querySelector("#timer");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");

let timer;
let time = 0;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
  time = input.value * 60;
  timer = setInterval(() => {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    if (time <= 0) {
      stopTimer();
      timerDisplay.innerHTML = "Time's up!";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
const defaultTimers = [5, 10, 15, 20, 25];

defaultTimers.forEach(time => {
  const btn = document.createElement("button");
  btn.innerHTML = `${time} minutes`;
  btn.addEventListener("click", () => {
    input.value = time;
  });
  document.body.appendChild(btn);
});
