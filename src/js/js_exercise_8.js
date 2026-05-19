const inputText = document.getElementById("inputText");
const resultDiv = document.getElementById("results");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

inputText.addEventListener("input", () => {
  const text = inputText.value;

  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const characters = text.replace(/\s/g, ""); // eliminar espacios para contar caracteres

  resultDiv.innerHTML = `<p>Total Palabras: ${words.length}</p><p>Total Caracteres: ${characters.length}</p>`;
});
