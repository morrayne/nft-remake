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
  "name manage",
  "image sort",
  "price control",
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
  "Notifications",
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
const notArrEng = [
  "Your options choices were saved",
  "You don't have enough credits for this operation",
  "This function is currently in progress"
]

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
  "очистить фильтр",
  "по имени",
  "по цвету NFT",
  "по вложениям",
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
const notArrRus = [
  "Ваш выбор настроек был сохранен",
  "На вашем балансе не достаточно средств для этой операции",
  "В данный момент эта функция недоступна"
]

// СВИЧЕРЫ ВНУТРИ НАСТРОЕК
// инициализация объекта

let optionObject = {};
let optionsLeft = document.querySelector(".options-left");
function loadOptions() {
  if (localStorage.getItem("options")) {
    // createNot("Your options choices were loaded");
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

// фактическое переключение настроек

let notArr = [];
function optionChange(name, position) {
  if (name === "Language") {
    let langArr = [];
    let headerArr = [];
    let footerArr = [];
    if (position === 1) {
      notArr = notArrRus;
      langArr = sectionArrRus;
      headerArr = headerArrRus;
      footerArr = footerArrRus;
      document.querySelectorAll(".inputs")[0].setAttribute("placeholder", commentsArrRus[1]);
      document.querySelectorAll(".inputs")[1].setAttribute("placeholder", commentsArrRus[2]);
    } else if (position === 0) {
      notArr = notArrEng;
      langArr = sectionArrEng;
      headerArr = headerArrEng;
      footerArr = footerArrEng;
      document.querySelectorAll(".inputs")[0].setAttribute("placeholder", commentsArrEng[1]);
      document.querySelectorAll(".inputs")[1].setAttribute("placeholder", commentsArrEng[2]);
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
    document.querySelectorAll(".switch-holder").forEach(function(el) {
      rePressSwitcher(el);
    })
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

// 

function rePressSwitcher (switcher) {
  let switcherLength = switcher.children.length - 1;
  let position = 0;
  for (let i = 0; i < switcherLength; i++) {
    if (switcher.classList.contains("swPos" + i)) {
      position = i;
    }
  }
  switcherChange(switcher, position);
  // console.log(position);
}

// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
// форматирование имен

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}

//

loadOptions();




