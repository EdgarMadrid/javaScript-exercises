const display = document.getElementById("display");
const buttonsContainer = document.getElementById("buttons-container");

buttonsContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("btn")) {
    const value = target.getAttribute("data-value");
    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
        buttonsContainer.style.pointerEvents = "none"; // Deshabilitar botones
        setTimeout(() => {
          display.value = "";
          buttonsContainer.style.pointerEvents = "auto"; // Rehabilitar botones
        }, 2000);
      }
    } else if (value === "C") {
      display.value = "";
    } else {
      display.value += value;
    }
  }
});
