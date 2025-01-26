const originalHolder = document.querySelector(".explore-holder");
const startArr = Array.from(originalHolder.children);
const filterBtns = document.querySelector(".explore-filter");

let sortPriceCounter = 1;
filterBtns.addEventListener("click", function (event) {
  if (filterBtns.children[0] === event.target) {
    updateDOM(startArr);
  } else if (filterBtns.children[1] === event.target) {
    const sortedArray = sortByPrice(sortPriceCounter);
    updateDOM(sortedArray);
    sortPriceCounter = sortPriceCounter*(-1);
  } else if (filterBtns.children[2] === event.target) {
    //
  } else {
    //
  }
});

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
  if (sortPriceCounter === 1) {
    sortArray.sort((a, b) => a.price - b.price);
  } else {
    sortArray.sort((a, b) => b.price - a.price);
  }
  return sortArray.map((item) => item.element);
}
function updateDOM(elements) {
  originalHolder.innerHTML = '';
  elements.forEach(element => {
    originalHolder.appendChild(element);
  });
}