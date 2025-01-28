const originalHolder = document.querySelector(".explore-holder");
const startArr = Array.from(originalHolder.children);
const filterBtns = document.querySelector(".explore-filter");
function updateDOM(elements) {
  originalHolder.innerHTML = "";
  elements.forEach((element) => {
    originalHolder.appendChild(element);
  });
}

filterBtns.addEventListener("click", function (event) {
  const targetButton = event.target.closest("button");
  updateDOM(startArr);
  document.getElementById("pricePointer").style.opacity = "0.5";
  document.getElementById("pricePointer").style.rotate = "180deg";
  document.querySelector(".colorShow").parentElement.children[0].style.backgroundColor = "#000";
  document.querySelector(".colorShow").parentElement.children[1].style.opacity = "0.5";
  document.querySelector(".colorShow").parentElement.children[1].style.rotate = "90deg";
  document.querySelector(".colorShow").parentElement.children[2].style.backgroundColor = "#000";
  if (targetButton === filterBtns.children[0]) {
    // Обработка первой кнопки
  } else if (targetButton === filterBtns.children[1]) {
    updateDOM(sortByPrice(sortPriceCounter));
    sortPriceCounter = sortPriceCounter * -1;
  } else if (targetButton === filterBtns.children[2]) {
    updateDOM(sortByColor());
  }
});

let sortPriceCounter = 1;
function sortByPrice(sortPriceCounter) {
  let sortArray = [];
  for (let i = 0; i < startArr.length; i++) {
    let priceElement = startArr[i].querySelector(".t-16");
    if (priceElement) {
      let price = parseFloat(
        priceElement.textContent.replace(/[^0-9.-]+/g, "")
      );
      sortArray.push({ element: startArr[i], price: price });
    }
  }
  document.getElementById("pricePointer").style.opacity = "1";
  if (sortPriceCounter === 1) {
    sortArray.sort((a, b) => a.price - b.price);
    document.getElementById("pricePointer").style.rotate = "270deg";
  } else {
    sortArray.sort((a, b) => b.price - a.price);
    document.getElementById("pricePointer").style.rotate = "90deg";
  }
  return sortArray.map((item) => item.element);
}

let sortColorCounter = 1;
function sortByColor() {
  let colorNum;
  let sortArray = [];
  let outArr = [];
  for (let i = 0; i < startArr.length; i++) {
    for (let j = 0; j < imgScr.length; j++) {
      if (startArr[i].classList.contains("color" + j)) {
        colorNum = j;
        break;
      }
    }
    sortArray.push({ obj: startArr[i], color: colorNum });
  }
  let dots = document.querySelector(".colorShow").parentElement;
  dots.children[1].style.opacity = "1";
  dots.children[1].style.rotate = "0deg";
  if (sortColorCounter == 1) {
    sortArray.sort((a, b) => a.color - b.color);
    dots.children[2].style.backgroundColor = "#fd891f";
    dots.children[0].style.backgroundColor = "#aacacd";
  } else {
    sortArray.sort((a, b) => b.color - a.color);
    dots.children[0].style.backgroundColor = "#fd891f";
    dots.children[2].style.backgroundColor = "#aacacd";
  }
  sortColorCounter = sortColorCounter * -1;
  for (let i = 0; i < sortArray.length; i++) {
    outArr[i] = sortArray[i].obj;
  }
  return outArr;
}
