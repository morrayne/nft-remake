// ВКЛЮЧЕНИЕ ЭКРАНА НАСТРОЕК

document.querySelector(".header-r").addEventListener("click", function (event) {
  if (event.target.closest("button")) {
    document.querySelector(".opt-div").style.display = "flex";
    getSize();
    setTimeout(() => {
      switcher(0, parseInt(localStorage.getItem("theme")));
      switcher(1, parseInt(localStorage.getItem("lang")));
    }, 10);
    setTimeout(() => {
      document.querySelector(".opt-div").style.opacity = "1";
    }, 200);
  }
});

// ВЫКЛЮЧЕНИЕ ЭКРАНА НАСТРОЕК

document.querySelector(".opt-div").addEventListener("click", function (event) {
  let err = document.querySelector(".opt-div");
  if (event.target.closest("#close")) {
    err.style.opacity = "0";
    setTimeout(() => {
      err.style.display = "none";
    }, 200);
    createError("New options saved");
  } else if (!event.target.closest(".opt-card")) {
    err.style.opacity = "0";
    setTimeout(() => {
      err.style.display = "none";
    }, 200);
    createError("New options saved");
  }
});

// ПОЛУЧЕНИЕ РАЗМЕРОВ БЕГУНКА

let arr1 = [];
let arr2 = [];
function getSize() {
  document.querySelectorAll(".switch-div").forEach(function (el, index) {
    let arr = [];
    for (let i = 1; i < el.children.length; i++) {
      arr.push(el.children[i].clientWidth);
    }
    if (index === 0) {
      arr1 = arr;
    } else {
      arr2 = arr;
    }
  });
}

// ОПЦИИ ПОВЕДЕНИЯ БЕГУНКА И НАСТРОЕК

function switcher(row, option) {
  let el = document.querySelectorAll(".switch-div")[row];
  let arr;
  if (row === 0) {
    arr = arr1;
  } else if (row === 1) {
    arr = arr2;
  }
  // ИЗМЕНЕНИЕ ЦВЕТА ТЕКСТА И РАЗМЕРОВ И ПОЛОЖЕНИЯ БЕГУНКА
  if (option === 0) {
    el.children[0].style.width = arr[0] + 16 + "px";
    el.children[0].style.marginLeft = 0 + "px";
    el.children[1].style.filter = "invert(0)";
    el.children[2].style.filter = "invert(0)";
  } else {
    el.children[0].style.width = arr[1] + 16 + "px";
    el.children[0].style.marginLeft = arr[0] + 24 + "px";
    el.children[1].style.filter = "invert(1)";
    el.children[2].style.filter = "invert(1)"; 
  }
}

// ФАКТИЧЕСКОЕ ВЛИЯНИЕ НАСТРОЕК НА САЙТ

function reSize(row, option) {
  if (row == 0 && option == 0) {
    document.body.style.setProperty("--bl", "#000");
    document.body.style.setProperty("--wh", "#fff");
    document.body.style.setProperty("--bl20", "#00000020");
    document.body.style.setProperty("--bl90", "#00000090");
    document.body.style.setProperty("--gr", "#cbcbcb");
    document.body.style.setProperty("--gr50", "#cbcbcb50");
    document.body.style.setProperty("--base", "#fff");
    document.body.style.setProperty("--grbtn", "#3b3b3b");

    document.querySelectorAll(".inv").forEach(function (el) {
      el.style.filter = "";
    });
    document.querySelectorAll(".brig").forEach(function (el) {
      el.style.filter = "";
    });
    document.getElementById("f-img").style.filter = "";
  } else if (row == 0 && option == 1) {
    document.body.style.setProperty("--bl", "#fff");
    document.body.style.setProperty("--wh", "#000");
    document.body.style.setProperty("--bl20", "#ffffff10");
    document.body.style.setProperty("--bl90", "#ffffff90");
    document.body.style.setProperty("--gr", "#ffffff");
    document.body.style.setProperty("--gr50", "#ffffff90");
    document.body.style.setProperty("--base", "#080808");
    document.body.style.setProperty("--grbtn", "#787878");

    document.querySelectorAll(".inv").forEach(function (el) {
      el.style.filter = "invert(1)";
    });
    document.querySelectorAll(".brig").forEach(function (el) {
      el.style.filter = "brightness(100)";
    });
    document.getElementById("f-img").style.filter = "brightness(0)";
  } else if (row == 1 && option == 0) {
  } else if (row == 1 && option == 1) {
  }
  saveOptions(row, option);
  switcher(row, option);
}

// ДОБАВЛЕНИЕ ВОЗМОЖНОСТИ ПЕРЕКЛЮЧЕНИЯ НАСТРОЕК

document.querySelectorAll(".switch-div").forEach(function (el, index) {
  el.addEventListener("click", function (event) {
    let tar = event.target;
    if (tar === el.children[1]) {
      reSize(index, 0);
    } else if (tar === el.children[2]) {
      reSize(index, 1);
    }
  });
});

// СОХРАНЕНИЕ И ЗАГРУЗКА НАСТРОЕК ПОЛЬЗОВАТЕЛЯ

function saveOptions(row, position) {
  if (row === 0) {
    localStorage.setItem("theme", position);
  } else {
    localStorage.setItem("lang", position);
  }
}
function loadOptions() {
  createNotification("Your options were loaded");
  localStorage.getItem("lang");
  reSize(0, localStorage.getItem("theme"));
  reSize(1, localStorage.getItem("lang"));
}
loadOptions();