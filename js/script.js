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


const navChildren = document.querySelector(".header-nav").children;

document.querySelector(".header-nav").addEventListener("click", function(event) {
  let targetElement
    if (navChildren[0] === event.target) {
        targetElement = document.querySelector(".discover");
    } else if (navChildren[1] === event.target) {
        targetElement = document.querySelector(".explore");
    } else if (navChildren[2] === event.target) {
        targetElement = document.querySelector(".just");
    } else {
        targetElement = document.querySelector(".table");
    }
    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 80;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
});


const imgD = document.querySelector(".d-img-c");
const images = Array.from(imgD.children); // Получаем массив элементов внутри imgD
let currentIndex = 0; // Индекс текущего изображения
const gap = document.querySelector(".d-img").clientWidth; // Ширина одного изображения
const cont = document.querySelector(".d-point-c");

cont.addEventListener("click", function(event) {
  const firstChild = cont.children[0];
  
  if (firstChild && firstChild.contains(event.target)) {
    console.log("left");
    // Уменьшаем индекс, если он больше 0
    if (currentIndex > 0) {
      currentIndex--;
    }
  } else {
    console.log("right");
    // Увеличиваем индекс, если он меньше количества изображений - 1
    if (currentIndex < images.length - 1) {
      currentIndex++;
    }
  }
  
  // Обновляем положение каждого элемента
  images.forEach((image) => {
    image.style.transform = "translateX(-" + gap * currentIndex + "px)";
  });
});



