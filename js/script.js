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
  spanText.classList.add("t");
  spanText.textContent = nameArr[Math.floor(Math.random() * nameArr.length)];
  const spanText1 = document.createElement("span");
  spanText1.textContent = surArr[Math.floor(Math.random() * surArr.length)];
  spanText1.classList.add("t");
  const finText = document.createElement("span");
  finText.textContent = spanText.textContent + " " + spanText1.textContent;
  finText.classList.add("t");
  const finNumber = document.createElement("span");
  finNumber.textContent = numArr[Math.floor(Math.random() * numArr.length)];
  finNumber.classList.add("t");
  const btn = document.createElement("button");
  btn.classList.add("follow-btn");
  btn.textContent = "follow";
  btn.classList.add("t");

  line.appendChild(img);
  followDiv.appendChild(finText);
  followDiv.appendChild(finNumber);
  followDiv.children[0].classList.add("t-16");
  followDiv.children[1].classList.add("t-14");
  line.appendChild(followDiv);
  line.appendChild(btn);

  return line;
}

document.querySelector(".f-list").addEventListener("click", function (event) {
  if (event.target.classList.contains("follow-btn")) {
    if (event.target.classList.contains("followed")) {
      event.target.classList.remove("followed");
      event.target.textContent = "follow";
      event.target.classList.add("t");
    } else {
      event.target.classList.add("followed");
      event.target.textContent = "following";
      event.target.classList.add("t");
    }
  }
});

const ina = document.querySelector(".explore-holder");
for (let i = 0; i < 7; i++) {
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
  h3.classList.add("t-20");
  h3.textContent = "sun glasses";
  h3.classList.add("t");
  const holderb = document.createElement("div");
  holderb.classList.add("holder-b");
  const hl = document.createElement("div");
  hl.classList.add("h-l");
  const sp = document.createElement("span");
  sp.textContent = "current bid";
  sp.classList.add("t");
  sp.classList.add("t-14");
  const gemdiv = document.createElement("div");
  gemdiv.classList.add("gem");
  const gemsvg = document.createElement("img");
  gemsvg.setAttribute("src", "./res/svg/gem.svg");
  const num = document.createElement("span");
  num.textContent = numArr[Math.floor(Math.random() * numArr.length)];
  num.classList.add("t");
  num.classList.add("t-14");
  const btn = document.createElement("button");
  btn.classList.add("b-btn");
  btn.textContent = "place-bid";
  btn.classList.add("t");

  gemdiv.appendChild(gemsvg);
  gemdiv.appendChild(num);
  hl.appendChild(sp);
  hl.appendChild(gemdiv);
  holderb.appendChild(hl);
  holderb.appendChild(btn);
  holder.appendChild(img);
  holder.appendChild(h3);
  holder.appendChild(holderb);

  return holder;
}
