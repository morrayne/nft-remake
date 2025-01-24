const imgScr = [
  "./res/img/icons/BlueStones.png",
  "./res/img/icons/GreenBubbles.png",
  "./res/img/icons/RedWaves.png",
  "./res/img/icons/WhiteField.png",
  "./res/img/icons/YellowSpot.png",
];
const sub = [
  "Great website! The interface is very user-friendly.",
  "I love how everything is organized. It's easy to find the information I need.",
  "The design is fantastic! It's modern and pleasing to the eye.",
  "The site runs quickly and smoothly. I'm impressed!",
  "Good navigation; I don't have to spend a lot of time searching for sections.",
  "Information is presented clearly and understandably. Thank you!",
  "I found exactly what I was looking for. It's a very helpful resource.",
  "The site looks professional. Excellent work!",
  "I appreciate the variety of useful features available here.",
  "Great content! I will definitely come back again.",
];
const nameArr = [
  "James",
  "Emma",
  "Oliver",
  "Ava",
  "William",
  "Sophia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
];
const surArr = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
];
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const list = document.querySelector(".follow-list");
const ina = document.querySelector(".explore-holder");
for (let i = 0; i < 9; i++) {
  const input = createHolder();
  input.classList.add("h" + i);
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
  num.textContent = getRandomNumber(10, 99) + "0";
  num.classList.add("t");
  num.classList.add("t-16");
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
  finNumber.textContent = getRandomNumber(10, 99) + "0";
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

for (let i = 0; i < 3; i++) {
  const input = createCom();
  document.querySelector(".comments").appendChild(input);
}
function createCom() {
  const line = document.createElement("div");
  line.classList.add("com-line");

  const img = document.createElement("img");
  img.setAttribute("src", imgScr[Math.floor(Math.random() * imgScr.length)]);
  img.classList.add("com-img");

  const comDiv = document.createElement("div");
  comDiv.classList.add("com-div");

  const spanText = document.createElement("span");
  spanText.classList.add("t");
  spanText.textContent = nameArr[Math.floor(Math.random() * nameArr.length)];
  const spanText1 = document.createElement("span");
  spanText1.textContent = surArr[Math.floor(Math.random() * surArr.length)];
  spanText1.classList.add("t");
  const finText = document.createElement("span");
  finText.textContent = spanText.textContent + " " + spanText1.textContent;
  finText.classList.add("t");
  finText.classList.add("t-20");

  const com = document.createElement("span");
  com.classList.add("t");
  com.classList.add("t-16");
  com.textContent = sub[Math.floor(Math.random() * sub.length)];

  line.appendChild(img);
  comDiv.appendChild(finText);
  comDiv.appendChild(com);
  line.appendChild(comDiv);

  return line;
}

document.getElementById("seeOther").addEventListener("click", function(){
  const offsetPosition = document.querySelector(".table").getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
})