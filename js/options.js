// СВИЧЕРЫ ВНУТРИ НАСТРОЕК
// инициализация объекта

let optionObject = {};
let optionsLeft = document.querySelector(".options-left");
function loadOptions() {
  if (localStorage.getItem("options")) {
    optionObject = JSON.parse(localStorage.getItem("options"));
    Object.keys(optionObject).forEach((name) => {
      changeByName(name);
    });
  } else {
    optionsLeft.querySelectorAll(".options-pair").forEach(function (el) {
      let name = removeAdjacentSpaces(el.children[0].textContent);
      optionObject[name] = 0;
      changeByName(name);
    });
  }
}

// описание алгоритма изменение объекта настроек

optionsLeft.addEventListener("click", function (event) {
  let holder = event.target.closest(".switch-holder");
  let position = event.target.closest("span");
  if (position) {
    let name = holder.parentElement.children[0].textContent;
    name = removeAdjacentSpaces(name);

    let childrenArray = Array.from(position.parentElement.children);
    let counter = childrenArray.indexOf(position);

    optionObject[name] = counter - 1;
    localStorage.setItem("options", JSON.stringify(optionObject));
    changeByName(name);
  }
});

// изменение свичеров по их имени в объекте

function changeByName(inputName) {
  let potencialName = "";
  let truePair;
  optionsLeft.querySelectorAll(".options-pair").forEach(function (el) {
    potencialName = removeAdjacentSpaces(el.children[0].textContent);
    if (potencialName === inputName) {
      truePair = el;
    }
  });
  optionChange(inputName, optionObject[inputName]);
  switcherChange(truePair.children[2], optionObject[inputName]);
}

// ФУНКЦИЯ ОТВЕТСТВЕННАЯ ЗА ФАКТИЧЕСКУЮ СМЕНУ НАСТРОЕК

function optionChange(name, position) {
  if (name === "Language") {
    if (position === 0) {
      translate("en");
      document
        .querySelectorAll(".inputs")[0]
        .setAttribute("placeholder", "enter your name");
      document
        .querySelectorAll(".inputs")[1]
        .setAttribute("placeholder", "what do you think?");
    } else {
      translate("ru");
      document
        .querySelectorAll(".inputs")[0]
        .setAttribute("placeholder", "введите свое имя");
      document
        .querySelectorAll(".inputs")[1]
        .setAttribute("placeholder", "что вы думаете?");
    }
    document.querySelectorAll(".switch-holder").forEach(function (el) {
      rePressSwitcher(el);
    });
  } else if (name === "Theme") {
    if (position === 0) {
      changeTheme("light");
    } else if (position === 1) {
      changeTheme("dark");
    }
  } else if (name === "Notifications alert") {
    let notc = document.getElementById("notifications");
    if (position === 0) {
      notc.style.display = "flex";
    } else if (position === 1) {
      notc.style.display = "none";
    }
  }
}

// ВООЗМОЖНОСТЬ МЕНЯТЬ ТЕМУ

function changeTheme(inputTheme) {
  if (inputTheme === "dark") {
    document.body.style.setProperty("--bl", "#fff");
    document.body.style.setProperty("--bl20", "#ffffff10");
    document.body.style.setProperty("--wh", "#000");
    document.body.style.setProperty("--wh20", "#00000010");
    document.body.style.setProperty("--gr", "#9b9b9b50");
    document.body.style.setProperty("--gr20", "#9b9b9b");
    document.querySelectorAll(".gem").forEach(function (el) {
      el.style.filter = "brightness(100)";
    });
    document.querySelectorAll(".gal").forEach(function (el) {
      el.style.filter = "invert(1)";
    });
    document.getElementById("footerLogo").style.filter = "brightness(0)";
    document.getElementById("logo").style.filter = "brightness(100)";
  } else {
    document.body.style.setProperty("--bl", "#000");
    document.body.style.setProperty("--bl20", "#00000020");
    document.body.style.setProperty("--wh", "#fff");
    document.body.style.setProperty("--wh20", "#ffffff20");
    document.body.style.setProperty("--gr", "#cbcbcb");
    document.body.style.setProperty("--gr20", "#cbcbcb80");
    document.querySelectorAll(".gem").forEach(function (el) {
      el.style.filter = "";
    });
    document.querySelectorAll(".gal").forEach(function (el) {
      el.style.filter = "";
    });
    document.getElementById("footerLogo").style.filter = "brightness(100)";
    document.getElementById("logo").style.filter = "brightness(0)";
  }
}

// функция перерасчёта ширина свичера после смены языка

function rePressSwitcher(switcher) {
  let switcherLength = switcher.children.length - 1;
  let position = 0;
  for (let i = 0; i < switcherLength; i++) {
    if (switcher.classList.contains("swPos" + i)) {
      position = i;
    }
  }
  switcherChange(switcher, position);
}

//  СОЗДАНИЕ КАРТОЧЕК HOLDER
// массивы имён и путей изображений

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

// создание объектов для карточек

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

// создание карточки из объекта

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
  bid.setAttribute("data-t-en", "current bid");
  bid.setAttribute("data-t-ru", "ставка");
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
  blackButtonText.classList.add("t", "w", "t-16");
  blackButtonText.setAttribute("data-t-en", "place bid");
  blackButtonText.setAttribute("data-t-ru", "поставить");

  blackButton.append(blackButtonText);
  holderGem.append(gem, value);
  holderLeft.append(bid, holderGem);
  holderBot.append(holderLeft, blackButton);
  holder.append(img, name, holderBot);

  document.querySelector(".explore-holder-c").appendChild(holder);
}

// сортировка карточки по вводным параметрам

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
      setTimeout(() => {
        btn.style.backgroundColor = "var(--wh)";
        btn.children[0].style.color = "var(--bl)";
      }, 600);
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
    // мини перевод
    const toTranslate = parent.querySelectorAll(".t");
    toTranslate.forEach((el) => {
      const attr = "data-t-" + localStorage.getItem("lang");
      const tr = el.getAttribute(attr);
      if (tr) {
        el.textContent = tr;
      }
    });
  }
});

// функция сортировки карточек по их объектам

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

// УВЕДОМЛЕНИЯ
// перевод для текста уведомлений

let waitArr = [];
const maxNotifications = 5;
let notArrRu = [
  "Ваш выбор настроек был сохранен",
  "У вас недостаточно средств на балансе",
  "Данная функция находится в разработке",
];
let notArrEn = [
  "Your options choises were saved",
  "You don't have enough credits on your account",
  "This function is currently in development",
];

// создание уведомления

function createNot(notIndex) {
  let parent = document.getElementById("notifications");
  let not = document.createElement("span");
  not.classList.add("w", "t-18", "t", "not");
  let notArr = [];
  if (optionObject.Language === 0) {
    notArr = notArrEn;
  } else if (optionObject.Language === 1) {
    notArr = notArrRu;
  }
  if (notIndex >= 0 && notIndex < notArr.length) {
    not.textContent = notArr[notIndex];
    if (parent.children[0].children.length < maxNotifications) {
      parent.children[0].append(not);
      decay(not);
    } else {
      waitArr.push(notIndex);
      console.log(waitArr);
      manageNotifications(parent);
    }
  }
}

// лист ожидания уведомлений

function manageNotifications(parent) {
  const interval = setInterval(() => {
    if (parent.children[0].children.length >= maxNotifications) {
      const oldestNot = parent.children[0].children[0];
      oldestNot.style.opacity = "0";
      setTimeout(() => {
        oldestNot.remove();
        if (waitArr.length > 0) {
          const nextNotIndex = waitArr.shift();
          createNot(nextNotIndex);
        }
      }, 200);
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

// самоуничтожение спустя время

function decay(not) {
  setTimeout(() => {
    not.style.opacity = "1";
  }, 200);
  setTimeout(() => {
    not.style.opacity = "0";
  }, 5000);
  setTimeout(() => {
    not.remove();
  }, 5200);
}

// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
// форматирование имен

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}

// перевод

function translate(lang) {
  localStorage.setItem("lang", lang);
  const toTranslate = document.querySelectorAll(".t");
  toTranslate.forEach((el) => {
    const attr = "data-t-" + lang;
    const tr = el.getAttribute(attr);
    if (tr) {
      el.textContent = tr;
    }
  });
}

//  подзагрузка настроек пользователя

loadOptions();
