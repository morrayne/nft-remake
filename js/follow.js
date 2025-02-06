// СИСТЕМА ПОДПИСОК

const list = document.querySelector(".follow-list");

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

// ОПИСАНИЕ АЛГОРИТМОВ

let preSubs = localStorage.getItem("names");
preSubs = preSubs ? JSON.parse(preSubs) : [];
subs = preSubs.length;
document.querySelector(".f-list").addEventListener("click", function (event) {
  if (
    event.target.classList.contains("follow-btn") &&
    event.target.classList.contains("hertaSub") === false
  ) {
    let data = followClick(event.target);
    if (event.target.classList.contains("followed")) {
      event.target.classList.remove("followed");
      event.target.textContent = "follow";
      followDelete(data);
      subs -= 1;
    } else if (subs < 5) {
      event.target.classList.add("followed");
      event.target.textContent = "following";
      followSave(data);
      subs += 1;
    } else if (subs > 4) {
      createNotification(
        "You can sub up to 5 people only (excluding The Herta)"
      );
    }
  }
});

let namArr = [];
let costArr = [];
let iconArr = [];

function followClick(el) {
  let parent = el.parentElement;
  let name = parent.children[1]?.children[0]?.textContent;
  let cost = parent.children[1]?.children[1]?.textContent;
  let icon = parent.children[0]?.src;
  if (name && cost && icon) {
    return [name, cost, icon];
  }
}

function followSave(el) {
  let names = localStorage.getItem("names");
  names = names ? JSON.parse(names) : [];
  if (names.length >= 5) {
  } else {
    names.push(el[0]);
    localStorage.setItem("names", JSON.stringify(names));
    let values = localStorage.getItem("values");
    values = values ? JSON.parse(values) : [];
    values.push(el[1]);
    localStorage.setItem("values", JSON.stringify(values));
    let iconPath = el[2];
    let modifiedIconPath = iconPath.substring(21);
    let icons = localStorage.getItem("icons");
    icons = icons ? JSON.parse(icons) : [];
    icons.push(modifiedIconPath);
    localStorage.setItem("icons", JSON.stringify(icons));
  }
}

function followDelete(el) {
  let names = localStorage.getItem("names");
  names = names ? JSON.parse(names) : [];
  let values = localStorage.getItem("values");
  values = values ? JSON.parse(values) : [];
  let icons = localStorage.getItem("icons");
  icons = icons ? JSON.parse(icons) : [];
  const nameIndex = names.indexOf(el[0]);
  if (nameIndex !== -1) {
    names.splice(nameIndex, 1);
    values.splice(nameIndex, 1);
    icons.splice(nameIndex, 1);
  }
  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("values", JSON.stringify(values));
  localStorage.setItem("icons", JSON.stringify(icons));
}

function recreateFollows() {
  let names = localStorage.getItem("names");
  names = names ? JSON.parse(names) : [];
  let values = localStorage.getItem("values");
  values = values ? JSON.parse(values) : [];
  let icons = localStorage.getItem("icons");
  icons = icons ? JSON.parse(icons) : [];
  if (names.length !== 0) {
    for (let i = 0; i < names.length; i++) {
      const line = document.createElement("div");
      line.classList.add("follow-line");
      const img = document.createElement("img");
      img.setAttribute("src", "." + icons[i]);
      img.classList.add("follow-img");
      const followDiv = document.createElement("div");
      followDiv.classList.add("follow-div");
      const finText = document.createElement("span");
      finText.classList.add("t");
      finText.textContent = names[i];
      const finNumber = document.createElement("span");
      finNumber.textContent = values[i];
      finNumber.classList.add("t");
      const btn = document.createElement("button");
      btn.classList.add("follow-btn");
      btn.classList.add("followed");
      btn.textContent = "following";
      btn.classList.add("t");

      line.appendChild(img);
      followDiv.appendChild(finText);
      followDiv.appendChild(finNumber);
      followDiv.children[0].classList.add("t-16");
      followDiv.children[1].classList.add("t-14");
      line.appendChild(followDiv);
      line.appendChild(btn);

      document.querySelector(".follow-list").appendChild(line);
    }
  }
}

recreateFollows();
for (let i = 0; i < 25; i++) {
  const input = createFollow();
  list.appendChild(input);
}

// THE HERTA LINE

let herta = document.querySelector(".the-herta");
herta.addEventListener("click", function (event) {
  if (event.target.classList.contains("follow-btn")) {
    if (event.target.classList.contains("followed")) {
      event.target.classList.remove("followed");
      event.target.textContent = "follow";
      localStorage.setItem("hertaSub", 0);
    } else {
      event.target.classList.add("followed");
      event.target.textContent = "following";
      localStorage.setItem("hertaSub", 1);
    }
  }
});

let hertaSub = localStorage.getItem("hertaSub");
if (hertaSub == 1) {
  document.querySelector(".hertaSub").classList.add("followed");
  document.querySelector(".hertaSub").textContent = "following";
}