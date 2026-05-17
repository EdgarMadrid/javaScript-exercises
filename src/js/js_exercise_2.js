const clickCounter = document.getElementById("click-counter-button");
const resetButton = document.getElementById("reset-button");
const clickCountDisplay = document.getElementById("click-count-display");

let count = 0;

clickCounter.addEventListener("click", () => {
  count++;
  clickCountDisplay.textContent = `${count}`;
});

resetButton.addEventListener("click", () => {
  count = 0;
  clickCountDisplay.textContent = `${count}`;
});
