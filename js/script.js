document.querySelectorAll(".d-stat").forEach(function (el) {
  if (el.firstElementChild) {
    el.firstElementChild.style.fontSize = "36px";
  }
});
const imgScr = [
  "./res/img/icons/BlueStones.png",
  "./res/img/icons/GreenBubbles.png",
  "./res/img/icons/RedWaves.png",
  "./res/img/icons/WhiteField.png",
  "./res/img/icons/YellowSpot.png",
];
const nameArr = ["Alex", "Lamar", "Kevin", "George", "Herta"];
const surArr = ["Ca", "Luis", "Washington", "Bright", "White"];
const numArr = ["120", "260", "300", "470", "510", "690", "730", "890"];
const list = document.querySelector(".follow-list");

for (let i = 0; i < 25; i++) {
  const input = createFollow();
  list.appendChild(input);
}

function createFollow() {
  const line = document.createElement("div");
  line.classList.add("follow-line");

  const img = document.createElement("img");
  img.setAttribute("src", imgScr[Math.floor(Math.random() * imgScr.length)]);
  img.classList.add("follow-img");

  const followDiv = document.createElement("div");
  followDiv.classList.add("follow-div");

  const spanText = document.createElement("span");
  spanText.textContent = nameArr[Math.floor(Math.random() * nameArr.length)];
  const spanText1 = document.createElement("span");
  spanText1.textContent = surArr[Math.floor(Math.random() * surArr.length)];

  const finText = document.createElement("span");
  finText.textContent = spanText.textContent + " " + spanText1.textContent;

  const finNumber = document.createElement("span");
  finNumber.textContent = numArr[Math.floor(Math.random() * numArr.length)];

  const btn = document.createElement("button");
  btn.classList.add("follow-btn");
  btn.textContent = "follow";

  line.appendChild(img);
  followDiv.appendChild(finText);
  followDiv.appendChild(finNumber);
  line.appendChild(followDiv);
  line.appendChild(btn);

  return line;
}

document.querySelector(".f-list").addEventListener("click", function (event) {
  if (event.target.classList.contains("follow-btn")) {
    if (event.target.classList.contains("followed")) {
      event.target.classList.remove("followed");
      event.target.textContent = "follow";
    } else {
      event.target.classList.add("followed");
      event.target.textContent = "following";
    }
  }
});

document.getElementById("profile").addEventListener("click", function () {
  const infoElement = document.querySelector(".info");
  if (infoElement.style.display === "none" || !infoElement.style.display) {
    infoElement.style.display = "flex";
    setTimeout(() => {
      infoElement.style.opacity = 1;
    }, 0);
  } else {
    infoElement.style.opacity = 0;
    setTimeout(() => {
      infoElement.style.display = "none";
    }, 200);
  }
});

const ina = document.querySelector(".explore-holder");
for (let i = 0; i < 9; i++) {
  const input = createHolder();
  ina.appendChild(input);
}

function createHolder() {
  const holder = document.createElement("div");
  holder.classList.add("holder");

  const img = document.createElement("img");
  img.setAttribute("src", imgScr[Math.floor(Math.random() * imgScr.length)]);
  img.classList.add("holder-img");

  const h3 = document.createElement("span");
  h3.classList.add("h3-text");
  h3.textContent = "sun glasses";

  const holderb = document.createElement("div");
  holderb.classList.add("holder-b");

  const hl = document.createElement("div");
  hl.classList.add("h-l");

  const sp = document.createElement("span");
  sp.textContent = "current bid";

  const gemdiv = document.createElement("div");
  gemdiv.classList.add("gem");

  const gemsvg = document.createElement("img");
  gemsvg.setAttribute("src", "./res/svg/gem.svg");

  const num = document.createElement("span");
  num.textContent = numArr[Math.floor(Math.random() * numArr.length)];

  const btn = document.createElement("button");
  btn.classList.add("b-btn-big");
  btn.textContent = "place-bid";

  gemdiv.appendChild(gemsvg);
  gemdiv.appendChild(num);
  hl.appendChild(sp);
  hl.appendChild(gemdiv);
  holderb.appendChild(hl);
  holderb.appendChild(btn);
  holder.appendChild(img);
  holder.appendChild(h3);
  holder.appendChild(holderb);

  return holder
}