const lengthInput = document.getElementById("length");
const generateButton = document.getElementById("generate-button");
const passwordResult = document.getElementById("password-result");

generateButton.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 4) {
    alert("Por favor, ingresa una longitud válida (mínimo 4 caracteres).");
    return;
  }
  const password = generatePassword(length);
  passwordResult.textContent = ` ${password}`;
});

function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
