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

// локализация подписок

const engSubText = ["follow", "following"];
const ruSubText = ["следить", "отписаться"];
let subTextArr = [];
const reLang = localStorage.getItem("lang");
if (reLang === "ru") {
  subTextArr = ruSubText;
} else {
  subTextArr = engSubText;
}

// первоначальное создание строчек подписок

let followParent = document.querySelector(".just-right-c");
const followedArr = JSON.parse(localStorage.getItem("follows")) || [];
const savedFollowsLength = followedArr.length;
let currentFollowsArr = [];
let theHertaCounter;

if (document.fonts) {
  document.fonts.ready.then(() => {
    // Добавление уже имеющихся подписок если такие были
    for (let i = 0; i < savedFollowsLength; i++) {
      followedArr[i].index = i;
      currentFollowsArr.push(followedArr[i]);
      const person = createFollow(followedArr[i]);
      followParent.appendChild(person);
      // визуал для уже подписанных аккаунтов
      person.children[2].classList.add("sub");
      person.children[2].children[0].textContent = subTextArr[1];
    }
    // Создание новых рядов подписок
    for (let i = savedFollowsLength; i < 25; i++) {
      let trObj = createFollowObj(i);
      currentFollowsArr.push(trObj);
      const person = createFollow(trObj);
      followParent.appendChild(person);
    }
    // специальная подписка на The Herta
    theHertaCounter = localStorage.getItem("theHertaSub") || -1;
    const elem = followParent.querySelectorAll(".b-btn-o")[0];
    if (theHertaCounter == -1) {
      elem.classList.remove("sub");
      elem.children[0].textContent = subTextArr[0];
    } else {
      elem.classList.add("sub");
      elem.children[0].textContent = subTextArr[1];
    }
  });
}

// добавление взаимодействия с кнопкой подписки

followParent.addEventListener("click", function (event) {
  const el = event.target;
  // нахождение индекса нажатой кнопки
  const justRightLine = el.closest(".just-right-line");
  const index = Array.from(followParent.children).indexOf(justRightLine);
  if (index === 0) {
    let elem = el.closest(".b-btn-o");
    // визуальное изменение кропки
    if (theHertaCounter == -1) {
      elem.classList.add("sub");
      elem.children[0].textContent = subTextArr[1];
    } else {
      elem.classList.remove("sub");
      elem.children[0].textContent = subTextArr[0];
    }
    theHertaCounter = theHertaCounter * -1;
    // сохранение ее значения в localStogare
    localStorage.setItem("theHertaSub", theHertaCounter);
  } else {
    let elem = el.closest(".b-btn-o");
    if (elem && !elem.classList.contains("sub") && followedArr.length < 6) {
      elem.classList.add("sub");
      elem.children[0].textContent = subTextArr[1];
      // добавление объекта по индексу этой кнопки в подписки
      followedArr.push(currentFollowsArr[index - 1]);
    } else if (elem && elem.classList.contains("sub")) {
      elem.classList.remove("sub");
      elem.children[0].textContent = subTextArr[0];
      // удаление объекта по индексу этой кнопки в подписки
      followedArr.splice(followedArr.indexOf(currentFollowsArr[index - 1]), 1);
    } else {
      createNot(3);
    }
    localStorage.setItem("follows", JSON.stringify(followedArr));
  }
});

// создание объекта с вводом его index

function createFollowObj(id) {
  const name = nameArr[Math.floor(Math.random() * nameArr.length)];
  const surName = surArr[Math.floor(Math.random() * surArr.length)];
  const fullName = name + " " + surName;

  return {
    name: fullName,
    src: imgScr[Math.floor(Math.random() * imgScr.length)],
    value: (Math.floor(Math.random() * (99 - 10 + 1)) + 10) * 10,
    index: id,
  };
}

// создание элемента по объекту

function createFollow(obj) {
  const holder = document.createElement("div");
  holder.classList.add("just-right-line");
  const img = document.createElement("img");
  img.setAttribute("src", obj.src);
  img.classList.add("round-img");
  const textsCont = document.createElement("div");
  textsCont.classList.add("follow-text-c");
  const textTop = document.createElement("span");
  textTop.textContent = obj.name;
  textTop.classList.add("b", "t-16");
  const textBot = document.createElement("span");
  textBot.classList.add("b", "t-14");
  textBot.textContent = obj.value;
  const blackButton = document.createElement("button");
  blackButton.classList.add("b-btn-o");
  const blackButtonText = document.createElement("span");
  blackButtonText.classList.add("t", "b", "t-16");
  blackButtonText.textContent = subTextArr[0];
  textsCont.append(textTop, textBot);
  blackButton.appendChild(blackButtonText);
  holder.append(img, textsCont, blackButton);
  return holder;
}
