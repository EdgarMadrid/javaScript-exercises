const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll("#itemList li");

  listItems.forEach(function (item) {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
