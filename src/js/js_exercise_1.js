const buttonChanger = document.getElementById("change-bg-button");
const cardExercises = document.querySelector(".card-exercises");

const ColorRandom = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

buttonChanger.addEventListener("click", () => {
  cardExercises.style.backgroundColor = ColorRandom();
});
