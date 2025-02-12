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