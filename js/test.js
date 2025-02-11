
const switchGap = 18;
let widthArr = [];
getOptionsWidth();

// загрузка сохраненных настроек

let options = {};
if (localStorage.getItem("options") !== "") {
  options = JSON.parse(localStorage.getItem("options"));
  Object.keys(options).forEach(key => {
    
  });
} else {
  document.querySelectorAll(".options-pair").forEach(function (el) {
    let name = removeAdjacentSpaces(el.children[0].textContent);
    options[name] = 0;
  });
}
console.log(options);

// ширина всех кнопок

function getOptionsWidth() {
  document.querySelectorAll(".switch-holder").forEach(function (el) {
    let arr = [];
    for (i = 1; i < el.children.length; i++) {
      arr.push(el.children[i].clientWidth);
    }
    widthArr.push(arr);
  });
}

// смена какой-либо настройки

// function changeOptions(parentNumber, childNumber) {
//   let parent = document.querySelectorAll(".switch-holder")[parentNumber];
//   runnnerBehavior
// }

function optionsClickNumber(event, parent) {
  let childNumber = 0;
  for (let i = 0; i < parent.children.length; i++) {
    if (event.target === parent.children[i]) {
      childNumber = i - 1;
      break;
    }
  }
  return childNumber
}

// функцционал кнопок

document.querySelectorAll(".switch-holder").forEach(function (parent, index) {
  parent.addEventListener("click", function (event) {
    let childNumber = optionsClickNumber(event, parent);
    
    runnnerBehavior(index, childNumber);

    let name = removeAdjacentSpaces(parent.parentElement.children[0].textContent);
    options[name] = childNumber;

    localStorage.setItem("options", JSON.stringify(options));
  });
});

// форматирование текста

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, ' ').trim();
}

// поведение бегунка

function runnnerBehavior(index, childNumber) {
  let parent = document.querySelectorAll(".switch-holder")[index];
  let runner = parent.children[0];
  runner.style.width = widthArr[index][childNumber] + 8 + "px";
  runner.style.height = parent.clientHeight - 8 + "px";
  let margin = 0;
  if (childNumber === 0) {
    runner.style.marginLeft = margin + "px";
  } else {
    for (let i = 0; i < childNumber; i++) {
      margin += widthArr[index][i];
    }
    runner.style.marginLeft = margin + switchGap * childNumber + "px";
  }
}








// версия 2

let options = {};
let widthArr = [];
const switchGap = 18;

getOptionsButtonsWidth();

//

if (localStorage.getItem("options") === "") {

} else {
  document.querySelectorAll(".options-pair").forEach(function (el) {
    let name = removeAdjacentSpaces(el.children[0].textContent);
    options[name] = 0;
  });
  for (let i = 0; i < Object.keys(options).length; i++) {
    switchOption(Object.keys(options)[i], 0);
  }
}

// 

document.querySelector(".options-left").addEventListener("click", function (event) {
    const switchHolder = event.target.closest(".switch-holder");
    document.querySelectorAll(".switch-holder").forEach(function (el) {
      if (switchHolder === el) {
        let name = removeAdjacentSpaces(el.parentElement.children[0].textContent);
        for (let i = 1; i < el.children.length; i++) {
          if (event.target.closest("span") === el.children[i]) {
            switchOption(name, i - 1);
          }
        }
      }
    });
  });

//

function switchOption(optionName, position) {
  if (findOption(optionName) !== -1) {
    saveObject(optionName, position);
    let optionToChange = document.querySelectorAll(".switch-holder")[findOption(optionName)];
  }
}

// 

function findOption(optionName) {
  let optionIndex = -1;
  for (let i = 0; i < document.querySelectorAll(".options-pair").length; i++) {
    let parent = document.querySelectorAll(".options-pair")[i];
    let potencialName = removeAdjacentSpaces(parent.children[0].textContent);
    if (potencialName === optionName) {
      optionIndex = i;
      break;
    }
  }
  return optionIndex
}

// 

function moveRunner(option, position) {}

// 

function saveObject(name, position) {
  options[name] = position;
}
function saveOptions() {
  // localStorage.setItem("options", JSON.stringify(options));
}
function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}
function getOptionsButtonsWidth() {
  document.querySelectorAll(".switch-holder").forEach(function (el) {
    let arr = [];
    for (i = 1; i < el.children.length; i++) {
      arr.push(el.children[i].clientWidth);
    }
    widthArr.push(arr);
  });
}
