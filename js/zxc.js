let arr1 = [];
let arr2 = [];

document.getElementById("close").addEventListener("click", function () {
  let err = document.querySelector(".opt-div");
  err.style.opacity = "0";
  setTimeout(() => {
    err.style.display = "none";
  }, 200);
});

document.querySelector(".header-r").addEventListener("click", function (event) {
  if (event.target.closest("button")) {
    document.querySelector(".opt-div").style.display = "flex";
    getSize();
    setTimeout(() => {
      document.querySelector(".opt-div").style.opacity = "1";
    }, 200);
  }
});

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
  console.log(arr1, arr2);
}

function reSize(optionDiv, position) {
  let el = document.querySelectorAll(".switch-div")[optionDiv];
  let arr;
  if (optionDiv === 0) {
    arr = arr1;
  } else {
    arr = arr2;
  }

  if (position == 0) {
    el.children[0].style.width = arr[0] + 16 + "px";
    el.children[0].style.marginLeft = "0px";

    el.children[1].style.filter = "invert(0)";
    el.children[2].style.filter = "invert(0)";
  } else {
    el.children[0].style.width = arr[1] + 16 + "px";
    el.children[0].style.marginLeft = arr[0] + 24 + "px";

    el.children[1].style.filter = "invert(1)";
    el.children[2].style.filter = "invert(1)";
  }
}

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
