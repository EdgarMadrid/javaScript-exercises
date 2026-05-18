const timerDisplay = document.getElementById("timerDisplay");
const btnStart = document.getElementById("btn-timer");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

let timer;
let seconds = 0;
let miliseconds = 0;

function updateDisplay() {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const ms = miliseconds % 100;
  timerDisplay.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
}

btnStart.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      if (miliseconds >= 100) {
        seconds++;
        miliseconds = 0;
      }
      miliseconds++;
      updateDisplay();
    }, 10);
    btnStart.disabled = true;
    btnStart.textContent = "Running...";
    btnStart.style.backgroundColor = "gray";
    btnStop.disabled = false;
    btnReset.disabled = false;
  }
});

btnStop.addEventListener("click", () => {
  btnStart.disabled = false;
  btnStart.textContent = "Start";
  btnStart.style.backgroundColor = "#4caf50";
  clearInterval(timer);
  timer = null;
});

btnReset.addEventListener("click", () => {
  btnStart.disabled = false;
  btnStart.textContent = "Start";
  btnStart.style.backgroundColor = "#4caf50";
  btnReset.style.backgroundColor = "#f44336";
  btnStop.style.backgroundColor = "#f44336";
  btnStop.disabled = true;
  btnReset.disabled = true;
  clearInterval(timer);
  timer = null;
  seconds = 0;
  miliseconds = 0;
  updateDisplay();
});
