

//

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}
const table = document.getElementById("table");
table.querySelectorAll("span").forEach(function(el) {
  if (removeAdjacentSpaces(el.textContent) === "random number") {
    el.textContent = (Math.floor(Math.random() * (99 - 10 + 1)) + 10) * 10;
  }
})
