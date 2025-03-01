//

const form = document.querySelector(".comments-inputs");
form.querySelectorAll(".inputs").forEach(function (el) {
  el.addEventListener("change", function () {
    showOutline(el);
  });
});

//

function showOutline(el) {
  const textInside = el.value;
  if (textInside.length < 3) {
    el.style.border = "solid 2px red";
  } else {
    el.style.border = "solid 2px green";
  }
  setTimeout(() => {
    el.style.border = "";
  }, 2000);
}

// шанс увидеть комментарий автора

function rollRandom() {
  const chance = Math.random() * 100;
  if (chance < 10) {
    return true;
  } else {
    return false;
  }
}
if (rollRandom() === true) {
  document.querySelectorAll(".comments-line")[1].style = "";
}

// анонимность

form
  .querySelector(".switch-holder")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (form.querySelector(".switch-holder").classList.contains("swPos1")) {
      form.querySelectorAll(".inputs")[0].style.display = "none";
      form.querySelectorAll(".inputs")[0].value = "User" + formattedSession;
    } else {
      form.querySelectorAll(".inputs")[0].style.display = "";
      form.querySelectorAll(".inputs")[0].value = "";
    }
  });

// отправка заготовки

form.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelectorAll(".inputs").forEach((input) => showOutline(input));
  createComHTML(createComObj());
});

//

const imgForSession = imgScr[Math.floor(Math.random() * imgScr.length)];
document.getElementById("optionsLogo").setAttribute("src", imgForSession);
document.getElementById("profile").setAttribute("src", imgForSession);

//

function createComObj() {
  if (
    form.querySelectorAll(".inputs")[0].value.length >= 3 &&
    form.querySelectorAll(".inputs")[1].value.length >= 3
  ) {
    return {
      name: form.querySelectorAll(".inputs")[0].value,
      comm: form.querySelectorAll(".inputs")[1].value,
      icon: imgForSession,
    };
  }
}

function createComHTML(obj) {
  if (obj) {
    let line = document.createElement("div");
    line.classList.add("comments-line");

    let img = document.createElement("img");
    img.setAttribute("src", obj.icon);
    img.classList.add("round-img");

    let comText = document.createElement("div");
    comText.classList.add("comments-text");

    let name = document.createElement("span");
    name.textContent = obj.name;
    name.classList.add("b", "t-18");

    let comm = document.createElement("span");
    comm.textContent = obj.comm;
    comm.classList.add("b", "t-12");

    comText.append(name, comm);
    line.append(img, comText);
    document.getElementById("comments").appendChild(line);
  }
}
