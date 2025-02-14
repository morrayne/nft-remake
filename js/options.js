// английская локализация

const discoverArrEng = [
  "Discover and",
  "create NFTs",
  "Discover, Create and Sell NFTs On Our NFT Marketplace",
  "With Over Thousands Of NFTs And Get a $20 bonus.",
  "about NFTs",
  "to traidings",
  "Art works",
  "Creators",
  "Collections",
];
const exploreArrEng = [
  "Explore marketplace",
  "refresh filters",
  "price manage",
  "image color",
  "hide similar",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
];
const justArrEng = [
  "Just unleash",
  "your inner collector",
  "Best seller all around the world",
  "$2M+ transections every day",
  "Secure transactions",
  "Exclusive collections from sellers",
  "Easy buying and selling",
  "Join our community",
  "explore more",
  "Best sellers",
];
const preArrEng = [
  "Create and sell NFTs",
  "World’s largest NFT marketplace",
  "Leave your opinion about ntf-remake",
];
const tableArrEng = [
  "Collection",
  "Volume",
  "% per 24h",
  "Floor price",
  "Owners",
  "Items",
  "Blue Stones",
  "by redmorrayne",
  "Green Bubbles",
  "by whyxies",
  "Red Waves",
  "by jacio1",
  "White Field",
  "by Fantazer",
  "Yellow Spot",
  "by Miph",
];
const optionsArrEng = [
  "Language",
  "English",
  "Russian",
  "Theme",
  "Light",
  "Dark",
  "Notifications alert",
  "On",
  "Off",
  "@redmorrayne",
  "uid: 0",
  "",
];
const headerArrEng = [
  "discover",
  "explore",
  "unleash",
  "pre",
  "table",
  "comments",
  "change options",
];
const footerArrEng = [
  "© 2025 EATLY All Rights Reserved.",
  "discover",
  "explore",
  "unleash",
  "pre",
  "table",
  "comments",
];
const commentsArrEng = [
  "You can leave your comments here",
  "enter your name",
  "what do you think",
];
let sectionArrEng = [
  discoverArrEng,
  exploreArrEng,
  justArrEng,
  preArrEng,
  tableArrEng,
  commentsArrEng,
  optionsArrEng,
];

// русская локализация

const discoverArrRus = [
  "Познавайте и",
  "создавайте NFT",
  "Откройте, создайте и продавайте NFT на нашем NFT рынке.",
  "С более чем тысячами NFT и получите бонус в $20.",
  "больше о NFT",
  "трейдинг",
  "Работы сообщества",
  "Создатели",
  "Коллекции",
];
const exploreArrRus = [
  "Изучите рынок",
  "очистить сортировку",
  "по ценам",
  "по цвету NFT",
  "скрыть похожие",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
  "ставка",
  "поставить",
];
const justArrRus = [
  "Просто раскройте",
  "вашего внутреннего коллекционера",
  "Лучшие продавцы по всему миру",
  "$2M+ транзакций каждый день",
  "Безопасные транзакции",
  "Эксклюзивные коллекции от продавцов",
  "Лёгкая покупка и продажа",
  "Присоединяйтесь к нашему сообществу",
  "узнайть больше",
  "Лучшие продавцы",
];
const preArrRus = [
  "Создавайте и продавайте NFT",
  "Самый большой рынок NFT в мире",
  "Оставьте своё мнение о ntf-remake",
];
const tableArrRus = [
  "Коллекция",
  "Объём",
  "% за 24ч",
  "Минимум",
  "Владельцы",
  "Элементы",
  "Blue Stones",
  "от redmorrayne",
  "Green Bubbles",
  "от whyxies",
  "Red Waves",
  "от jacio1",
  "White Field",
  "от Fantazer",
  "Yellow Spot",
  "от Miph",
];
const optionsArrRus = [
  "Язык",
  "Английский",
  "Русский",
  "Тематика",
  "Светлая",
  "Тёмная",
  "Уведомления",
  "Включено",
  "Выключено",
  "@redmorrayne",
  "uid: 0",
  "",
];
const headerArrRus = [
  "начать",
  "рынок",
  "коллекция",
  "о NFT",
  "таблица",
  "отзывы",
  "изменить настройки",
];
const footerArrRus = [
  "© 2025 EATLY Все права защищены.",
  "начать",
  "рынок",
  "коллекция",
  "о NFT",
  "таблица",
  "отзывы",
];
const commentsArrRus = [
  "Здесь вы можете оставить своё мнение",
  "введите ваше имя",
  "что вы думаете?",
];
let sectionArrRus = [
  discoverArrRus,
  exploreArrRus,
  justArrRus,
  preArrRus,
  tableArrRus,
  commentsArrRus,
  optionsArrRus,
];

// ОБЩИЕ ФУНКЦИИ И ОПИСАНИЕ ПОВЕДЕНИЙ
// открытие и закрытие настроек

document.getElementById("options").addEventListener("click", function (event) {
  if (event.target === this) {
    this.style.opacity = "0";
    setTimeout(() => {
      this.style.display = "none";
    }, 200);
  }
});
let openOptions = document.querySelectorAll(".header-c")[1];
openOptions.addEventListener("click", function (event) {
  if (event.target.closest("button")) {
    document.getElementById("options").style.display = "flex";
    loadOptions();
    setTimeout(() => {
      document.getElementById("options").style.opacity = "1";
    }, 200);
  }
});

// возможность переключать свичер

document.querySelectorAll(".switch-holder").forEach(function (switcher) {
  switcher.addEventListener("click", function (event) {
    for (let i = 1; i < switcher.children.length; i++) {
      if (switcher.children[i] === event.target) {
        switcherChange(switcher, i - 1);
      }
    }
  });
});

// описание алгоритма переключения свичера

const switchGap = 18;
function switcherChange(switcher, position) {
  let arr = [];
  for (i = 1; i < switcher.children.length; i++) {
    arr.push(switcher.children[i].clientWidth);
    switcher.children[i].style.color = "";
  }
  switcher.children[position + 1].style.color = "var(--bl)";
  let runner = switcher.children[0];
  runner.style.width = arr[position] + 8 + "px";
  // runner.style.height = switcher.clientHeight - 8 + "px";
  let margin = 0;
  if (position === 0) {
    runner.style.marginLeft = margin + "px";
  } else {
    for (let i = 0; i < position; i++) {
      margin += arr[i];
    }
    runner.style.marginLeft = margin + switchGap * position + "px";
  }
}

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

// переключение всех свичеров в первое положение

if (document.fonts) {
  document.fonts.ready.then(() => {
    document.querySelectorAll(".switch-holder").forEach(function (switcher) {
      switcherChange(switcher, 0);
    });
  });
}

// фактическое переключение настроек

function optionChange(name, position) {
  if (name === "Language") {
    let langArr = [];
    let headerArr = [];
    let footerArr = [];
    if (position === 1) {
      langArr = sectionArrRus;
      headerArr = headerArrRus;
      footerArr = footerArrRus;
      document
        .querySelectorAll(".inputs")[0]
        .setAttribute("placeholder", commentsArrRus[1]);
      document
        .querySelectorAll(".inputs")[1]
        .setAttribute("placeholder", commentsArrRus[2]);
    } else if (position === 0) {
      langArr = sectionArrEng;
      headerArr = headerArrEng;
      footerArr = footerArrEng;
      document
        .querySelectorAll(".inputs")[0]
        .setAttribute("placeholder", commentsArrEng[1]);
      document
        .querySelectorAll(".inputs")[1]
        .setAttribute("placeholder", commentsArrEng[2]);
    }
    for (let i = 0; i < document.querySelector(".c").children.length; i++) {
      let currentArr = langArr[i];
      let section = document.querySelector(".c").children[i];
      for (let j = 0; j < section.querySelectorAll(".t").length; j++) {
        section.querySelectorAll(".t")[j].textContent = currentArr[j];
      }
    }
    let header = document.querySelector("header");
    for (let j = 0; j < header.querySelectorAll(".t").length; j++) {
      header.querySelectorAll(".t")[j].textContent = headerArr[j];
    }
    let footer = document.querySelector("footer");
    for (let j = 0; j < footer.querySelectorAll(".t").length; j++) {
      footer.querySelectorAll(".t")[j].textContent = footerArr[j];
    }
  } else if (name === "Theme") {
    if (position === 0) {
      changeTheme("light");
    } else if (position === 1) {
      changeTheme("dark");
    }
  } else if (name === "Notifications") {
    if (position === 0) {
    } else if (position === 1) {
    }
  }
}

// ФУНКЦИИ ДЛЯ СМЕНЫ НАСТРОЕК
// смена темы

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

// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
// форматирование имен

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}

//

loadOptions();
// localStorage.setItem("options", "");
// console.log(localStorage.getItem("options"));
