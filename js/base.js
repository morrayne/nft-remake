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
      const offsetPosition = elementPosition - 90;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

// НАСТРОЙКИ

let widthArr = [];
function getOptionsWidth() {
  document.querySelectorAll(".switch-holder").forEach(function(el) {
    let arr = [];
    for (i = 1; i < el.children.length; i++){ 
      arr.push(el.children[i].clientWidth);
    }
    widthArr.push(arr);
  })
}

getOptionsWidth();
const switchGap = 18;
let optionsArr = [];
for (let i = 0; i < widthArr.length; i++) {
  optionsArr.push(0);
}

document.querySelectorAll(".switch-holder").forEach(function(parent, index) {
  parent.addEventListener("click", function(event) {
    let childNumber;
    for (let i = 0; i < parent.children.length; i++) {
      if (event.target === parent.children[i]) {
        childNumber = i - 1;
        break
      }
    }
    optionsArr[index] = childNumber;
    let runner = parent.children[0];
    runner.style.width = (widthArr[index][childNumber] + 8) + "px";
    runner.style.height = (parent.clientHeight - 8) + "px";
    let margin = 0;
    if (childNumber === 0) {
      runner.style.marginLeft = margin + "px";
    } else {
      for (let i = 0; i < childNumber; i++) {
        margin += widthArr[index][i];
      }
      runner.style.marginLeft = (margin + (switchGap * childNumber)) + "px";
    }
    localStorage.setItem("options", optionsArr);
  })
})