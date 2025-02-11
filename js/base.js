// ОТКРЫТИТЕ И ЗАКРЫТИЕ НАСТРОЕК

document.getElementById("options").addEventListener("click", function(event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});
document.querySelectorAll(".header-c")[1].addEventListener("click", function(event) {
  if (event.target.closest("button")) {
    document.getElementById("options").style.display = "flex";
  }
})

// НАСТРОЙКИ

const switchGap = 18;
let optionObject = {};
document.querySelectorAll(".switch-holder").forEach(function(switcher) {
  switcherChange(switcher, 0);
})
const storedOptions = localStorage.getItem("options");
if (storedOptions) {
  optionObject = JSON.parse(storedOptions);
  Object.keys(optionObject).forEach(key => {
    document.querySelectorAll(".options-pair").forEach(function (el) {
      let name = removeAdjacentSpaces(el.children[0].textContent);
      if (name === key) {
        let toSwitch = el.children[1];
        switcherChange(toSwitch, optionObject[key]);
      }
    });
  });
} else {
  document.querySelectorAll(".options-pair").forEach(function (el) {
    let name = removeAdjacentSpaces(el.children[0].textContent);
    optionObject[name] = 0;
  });
}

// ОБЩЕЕ ПОВЕДЕНИЕ СВИЧЕРОВ

document.querySelectorAll(".switch-holder").forEach(function (switcher) {
  switcher.addEventListener("click", function (event) {
    for (let i = 1; i < switcher.children.length; i++) {
      if (switcher.children[i] === event.target) {
        switcherChange(switcher, i - 1);
        // ЧАСТНЫЕ СВИЧЕРЫ И ИХ УСЛОВИЯ
        if (switcher.parentElement.classList.contains("options-pair")) {
          changeOptionObject(switcher, i - 1);
        }
      }
    }
  });
});

// 

function switcherChange(switcher, position) {
  let arr = [];
  for (i = 1; i < switcher.children.length; i++) {
    arr.push(switcher.children[i].clientWidth);
  }
  let runner = switcher.children[0];
  runner.style.width = (arr[position] + 8) + "px";
  runner.style.height = switcher.clientHeight - 8 + "px";
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

// 

function changeOptionObject(switcher, position) {
  let name = removeAdjacentSpaces(switcher.parentElement.children[0].textContent);
  optionObject[name] = position;
  localStorage.setItem("options", JSON.stringify(optionObject));
}

// 

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}