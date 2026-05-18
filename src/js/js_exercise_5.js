const display = document.getElementById("display");
const buttonsContainer = document.getElementById("buttons-container");

buttonsContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("btn")) {
    const value = target.getAttribute("data-value");

    if (value === "=") {
      try {
        if (display.value.includes("/0")) {
          throw new Error("División por cero");
        } else {
          display.value = eval(display.value);
        }
      } catch (error) {
        if (error.message === "División por cero") {
          display.value = "Error: División por cero";
        } else {
          display.value = "Error";
        }

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
