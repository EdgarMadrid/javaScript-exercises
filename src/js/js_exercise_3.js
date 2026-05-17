const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const displayList = document.getElementById("displayList");
addItemButton.addEventListener("click", function () {
  const itemText = itemInput.value.trim();
  if (itemText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${itemText}</span>
            <button class="delete-btn" data-id="${listItem}">Delete</button>
        `;
    displayList.appendChild(listItem);
    itemInput.value = "";
  }
});

displayList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const listItem = event.target.parentElement;
    displayList.removeChild(listItem);
  }
});
