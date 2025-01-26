// СИСТЕМА ПОДПИСОК

document.querySelector(".f-list").addEventListener("click", function (event) {
  if (event.target.classList.contains("follow-btn")) {
    if (event.target.classList.contains("followed")) {
      event.target.classList.remove("followed");
      event.target.textContent = "follow";
      event.target.classList.add("t");
    } else {
      event.target.classList.add("followed");
      event.target.textContent = "following";
      event.target.classList.add("t");
    }
  }
});

// НАВИГАЦИЯ HEADER

const navChildren = document.querySelector(".header-nav").children;
document
  .querySelector(".header-nav")
  .addEventListener("click", function (event) {
    let targetElement;
    if (navChildren[0] === event.target) {
      targetElement = document.querySelector(".discover");
    } else if (navChildren[1] === event.target) {
      targetElement = document.querySelector(".explore");
    } else if (navChildren[2] === event.target) {
      targetElement = document.querySelector(".just");
    } else {
      targetElement = document.querySelector(".table");
    }
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 100;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  });

// НАВИГАЦИЯ FOOTER

document.querySelectorAll(".footer-t-links").forEach((el) => {
  el.addEventListener("click", function (event) {
    let targetElement;
    if (el.children[0] === event.target) {
      targetElement = document.querySelector(".discover");
    } else if (el.children[1] === event.target) {
      targetElement = document.querySelector(".explore");
    } else if (el.children[2] === event.target) {
      targetElement = document.querySelector(".just");
    } else {
      targetElement = document.querySelector(".table");
    }
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

// КОММЕНТАРИИ К ФОТО В DISCOVER

const imgD = document.querySelector(".d-img-c");
const images = Array.from(imgD.children);
let currentIndex = 0;
const gap = document.querySelector(".d-img").clientWidth;
const cont = document.querySelector(".d-point-c");

cont.addEventListener("click", function (event) {
  const firstChild = cont.children[0];
  if (firstChild && firstChild.contains(event.target)) {
    if (currentIndex > 0) {
      currentIndex--;
    }
  } else {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    }
  }
  textReplace(currentIndex);
  images.forEach((image) => {
    image.style.transform = "translateX(-" + gap * currentIndex + "px)";
  });
});

function textReplace(index) {
  const div = document.querySelector(".more-info");
  if (index === 0) {
    div.children[0].textContent = "Blue Stones";
    div.children[1].textContent = "Simple blue and yellow overlapping stones";
  } else if (index === 1) {
    div.children[0].textContent = "Green Bubbles";
    div.children[1].textContent = "Pleasant green and blue big bubbles";
  } else if (index === 2) {
    div.children[0].textContent = "Red Waves";
    div.children[1].textContent = "Aesthetic and sharp red waves";
  } else if (index === 3) {
    div.children[0].textContent = "White Field";
    div.children[1].textContent = "Elegant white and gray lines";
  } else {
    div.children[0].textContent = "Yellow Spot";
    div.children[1].textContent = "Simplest red and orange fade";
  }
  div.style.opacity = 0.8;
  setTimeout(() => {
    div.style.opacity = 1;
  }, 200);
}

// ВТОРАЯ КНОПКА В DISCOVER

let sw1 = 0;
document.getElementById("knowMore").addEventListener("click", function () {
  const moreInfo = document.querySelector(".more-info");
  if (sw1 == 1) {
    sw1 = 0;
    moreInfo.style.opacity = "0";
    setTimeout(() => {
      moreInfo.style.display = "none";
    }, 200);
  } else {
    sw1 = 1;
    moreInfo.style.display = "flex";
    setTimeout(() => {
      moreInfo.style.opacity = "1";
    }, 0);
  }
});
