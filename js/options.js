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
    loadAll();
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
  }
  console.log(arr);
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

// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
// форматирование имен

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}
function loadAll(){
  loadOptions();
  // здесь возможно будет подгрузка подписок
  // здесь возможно будет подгрузка комментариев
}