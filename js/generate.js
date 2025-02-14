const nftNames = [
  "Lunar echo",
  "Silent wave",
  "Golden spark",
  "Crimson whirl",
  "Mystic pulse",
  "Echoing dream",
  "Vibrant shade",
  "Frosted glimmer",
  "Radiant whisper",
  "Eternal glow",
  "Twilight breeze",
  "Hidden gem",
  "Celestial drift",
  "Infinite canvas",
  "Shimmering horizon",
  "Dancing light",
  "Serene vista",
  "Wandering soul",
  "Timeless rhythm",
  "Ethereal touch",
];
const imgScr = [
  "./res/img/icons/BlueStones.png",
  "./res/img/icons/GreenBubbles.png",
  "./res/img/icons/RedWaves.png",
  "./res/img/icons/WhiteField.png",
  "./res/img/icons/YellowSpot.png",
];

let holderArr = [];
for (let i = 0; i < 10; i++) {
  let holder = {
    name: "",
    img: "",
    value: "",
    index: i,
  };
  const randomIndex = Math.floor(Math.random() * nftNames.length);
  holder.name = nftNames[randomIndex];
  nftNames.splice(randomIndex, 1);
  holder.img = imgScr[Math.floor(Math.random() * imgScr.length)];
  holder.value = (Math.floor(Math.random() * (99 - 10 + 1)) + 10) * 10;
  holderArr.push(holder);
}

for (let i = 0; i < holderArr.length; i++) {
  createHolder(holderArr[i]);
}
function createHolder(selectedObject) {
  const holder = document.createElement("div");
  holder.classList.add("holder");
  holder.classList.add("hNum" + selectedObject.index);
  let img = document.createElement("img");
  img.setAttribute("src", selectedObject.img);
  img.classList.add("holder-img");
  let name = document.createElement("span");
  name.textContent = selectedObject.name;
  name.classList.add("b", "t-20");
  const holderBot = document.createElement("div");
  holderBot.classList.add("holder-bot");
  const holderLeft = document.createElement("div");
  holderLeft.classList.add("holder-left");
  let bid = document.createElement("span");
  bid.textContent = "current bid";
  bid.classList.add("t", "b", "t-16");
  const holderGem = document.createElement("div");
  holderGem.classList.add("holder-gem");
  const gem = document.createElement("img");
  gem.setAttribute("src", "./res/svg/gem.svg");
  gem.classList.add("gem");
  let value = document.createElement("span");
  value.textContent = selectedObject.value;
  value.classList.add("b", "t-16");
  const blackButton = document.createElement("button");
  blackButton.classList.add("b-btn");
  const blackButtonText = document.createElement("span");
  blackButtonText.textContent = "place bid";
  blackButtonText.classList.add("t", "w", "t-16");

  blackButton.append(blackButtonText);
  holderGem.append(gem, value);
  holderLeft.append(bid, holderGem);
  holderBot.append(holderLeft, blackButton);
  holder.append(img, name, holderBot);

  document.querySelector(".explore-holder-c").appendChild(holder);
}

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
