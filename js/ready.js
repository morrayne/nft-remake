// ВЕРХНЕЕ СЛАЙД ШОУ

let discoverImgCounter = 0;
let images = [];
let descriptions = [];
for (
  let i = 0;
  i < document.querySelector(".discover-img-c").children.length;
  i++
) {
  if (
    document
      .querySelector(".discover-img-c")
      .children[i].classList.contains("discover-img")
  ) {
    images.push(document.querySelector(".discover-img-c").children[i]);
  }
  if (document.getElementById("more").children[i]) {
    descriptions.push(document.getElementById("more").children[i]);
  }
}
document
  .querySelector(".discover-point-c")
  .addEventListener("click", function (event) {
    const el = this;
    const gap = document.querySelector(".discover-img-c").offsetHeight;
    if (
      el.children[0] == event.target.closest("button") &&
      discoverImgCounter > 0
    ) {
      discoverImgCounter -= 1;
    } else if (
      el.children[1] == event.target.closest("button") &&
      discoverImgCounter < 4
    ) {
      discoverImgCounter += 1;
    }
    images.forEach((image) => {
      image.style.transform = "translateX(-" + gap * discoverImgCounter + "px)";
    });
    const descGap = document.getElementById("more").offsetWidth;
    descriptions.forEach((desc) => {
      desc.style.transform =
        "translateX(-" + descGap * discoverImgCounter + "px)";
    });
  });

// СОЗДАНИЕ СЛУЧАЙНЫХ ЧИСЕЛ У ТАБЛИЦЫ

function removeAdjacentSpaces(input) {
  return input.replace(/s{2,}/g, " ").trim();
}
const table = document.getElementById("table");
table.querySelectorAll("span").forEach(function (el) {
  if (removeAdjacentSpaces(el.textContent) === "random number") {
    el.textContent = (Math.floor(Math.random() * (99 - 10 + 1)) + 10) * 10;
  }
});

// НАВИГАЦИЯ

const screenWidth = screen.width;
document.querySelectorAll(".nav").forEach(function (el) {
  // распределение классов для адаптации
  for (let i = 0; i < el.children.length; i++) {
    el.children[i].classList.add("navBtn" + i);
  }

  // рабочая часть навигации
  el.addEventListener("click", function (event) {
    let targetElement;
    const buttons = el.querySelectorAll("button");
    buttons.forEach((button, index) => {
      if (event.target === button) {
        targetElement = document.querySelector(".c").children[index];
      }
    });
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      let offsetPosition = elementPosition - 90;
      if (screenWidth < 720) {
        offsetPosition = elementPosition - 120;
      }
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

//

document
  .querySelector(".explore-holder-c")
  .addEventListener("click", function (event) {
    if (event.target.closest(".b-btn")) {
      createNot(1);
    }
  });
document.querySelectorAll(".nocontent").forEach(function (el) {
  el.addEventListener("click", function () {
    createNot(2);
  });
});

// ТО ЧТО ЕСТЬ ОТ НАСТРОЕК
// открытие и закрытие настроек

document.getElementById("options").addEventListener("click", function (event) {
  if (event.target === this) {
    this.style.opacity = "0";
    setTimeout(() => {
      this.style.display = "none";
    }, 200);
    createNot(0);
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
  for (let i = 1; i < switcher.children.length; i++) {
    switcher.classList.remove("swPos" + (i - 1));
    arr.push(switcher.children[i].clientWidth);
    switcher.children[i].style.color = "";
  }
  switcher.children[position + 1].style.color = "var(--bl)";
  let runner = switcher.children[0];
  runner.style.width = arr[position] + 8 + "px";
  let margin = 0;
  if (position === 0) {
    runner.style.marginLeft = margin + "px";
  } else {
    for (let i = 0; i < position; i++) {
      margin += arr[i];
    }
    runner.style.marginLeft = margin + switchGap * position + "px";
  }
  switcher.classList.add("swPos" + position);
}

// переключение всех свичеров в первое положение

if (document.fonts) {
  document.fonts.ready.then(() => {
    document.querySelectorAll(".switch-holder").forEach(function (switcher) {
      switcherChange(switcher, 0);
    });
    setTimeout(() => {
      loadOptions();
    }, 200);
  });
}

//

let moreCounter = -1;
document
  .querySelector(".discover-btn-c")
  .addEventListener("click", function (event) {
    const btn = event.target.closest("button");
    if (btn && btn.classList.contains("b-btn")) {
      if (moreCounter === -1) {
        document.getElementById("more").style.display = "flex";
        setTimeout(() => {
          document.getElementById("more").style.opacity = "1";
        }, 200);
      } else {
        document.getElementById("more").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("more").style.display = "none";
        }, 200);
      }
      moreCounter = moreCounter * -1;
    } else {
      const elementPosition = document.getElementById("table").getBoundingClientRect().top + window.scrollY;
      let offsetPosition = elementPosition - 90;
      if (screenWidth < 720) {
        offsetPosition = elementPosition - 120;
      }
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
