let arr1 = [];
let arr2 = [];

document.querySelector(".opt-div").addEventListener("click", function (event) {
  let err = document.querySelector(".opt-div");
  if (event.target.closest("#close")) {
    err.style.opacity = "0";
    setTimeout(() => {
      err.style.display = "none";
    }, 200);
  } 
  else if (!event.target.closest(".opt-card")) {
    err.style.opacity = "0";
    setTimeout(() => {
      err.style.display = "none";
    }, 200);
  }
});


document.querySelector(".header-r").addEventListener("click", function (event) {
  if (event.target.closest("button")) {
    document.querySelector(".opt-div").style.display = "flex";
    getSize();
    reSize(0, 0);
    reSize(1, 0);
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

  if (optionDiv == 0 && position == 0) {
    document.body.style.setProperty("--bl", "#fff");
    document.body.style.setProperty("--wh", "#000");
    document.body.style.setProperty("--bl20", "#ffffff10");
    document.body.style.setProperty("--bl90", "#ffffff90");
    document.body.style.setProperty("--gr", "#ffffff");
    document.body.style.setProperty("--gr50", "#ffffff90");
    document.querySelectorAll(".sv").forEach(function(el) {
      el.style.filter = "invert(1)";
      // el.style.filter = "brightnes(10)";
    })
  } else if (optionDiv == 0 && position == 1) {
    document.body.style.setProperty("--bl", "#000");
    document.body.style.setProperty("--wh", "#fff");
    document.body.style.setProperty("--bl20", "#00000020");
    document.body.style.setProperty("--bl90", "#00000090");
    document.body.style.setProperty("--gr", "#cbcbcb");
    document.body.style.setProperty("--gr50", "#cbcbcb50");
    document.querySelectorAll(".sv").forEach(function(el) {
      el.style.filter = "";
    })
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
