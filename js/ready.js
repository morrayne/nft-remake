// ВЕРХНЕЕ СЛАЙД ШОУ

let discoverImgCounter = 0;
const images = Array.from(document.querySelector(".discover-img-c").children);
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
  });

// НАВИГАЦИЯ

document.querySelectorAll(".nav").forEach(function (el) {
  // распределение классов для адаптации
  for (let i = 0; i < el.children.length; i++) {
    el.children[i].classList.add("navBtn" + i);
  }

  // рабочая часть навигации
  const screenWidth = screen.width;
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
      createNot(notArr[1]);
    }
  });
document.querySelectorAll(".nocontent").forEach(function (el) {
  el.addEventListener("click", function () {
    createNot(notArr[2]);
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
    createNot(notArr[0]);
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
  });
}
