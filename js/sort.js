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

let btnHolder = document.querySelector(".explore-btn-c");
let allHolderOriginal = document.querySelector(".explore-holder-c").children;

btnHolder.addEventListener("click", function (event) {
  for (let i = 0; i < btnHolder.children.length; i++) {
    btnHolder.children[i].style.backgroundColor = "var(--wh)";
    btnHolder.children[i].children[0].style.color = "var(--bl)";
  }
  if (event.target.closest("button")) {
    let btn = event.target.closest("button");
    btn.style.backgroundColor = "var(--bl)";
    btn.children[0].style.color = "var(--wh)";
    let newHolderOrder = allHolderOriginal;
    if (btnHolder.children[0] === btn) {
      newHolderOrder = sortHolders(holderArr, "index");
    } else if (btnHolder.children[1] === btn) {
      newHolderOrder = sortHolders(holderArr, "name");
    } else if (btnHolder.children[2] === btn) {
      newHolderOrder = sortHolders(holderArr, "img");
    } else if (btnHolder.children[3] === btn) {
      newHolderOrder = sortHolders(holderArr, "value");
    }
    let parent = document.querySelector(".explore-holder-c");
    while (parent.children.length !== 0) {
      parent.removeChild(parent.firstChild);
    }
    for (let i = 0; i < newHolderOrder.length; i++) {
      createHolder(newHolderOrder[i]);
    }
  }
});

function sortHolders(arr, j) {
  switch (j) {
    case "index":
      return arr.sort((a, b) => a.index - b.index);
    case "name":
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    case "img":
      return arr.sort((a, b) => a.img.localeCompare(b.img));
    case "value":
      return arr.sort((a, b) => b.value - a.value);
    default:
      return arr;
  }
}