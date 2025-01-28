function createError(text) {
    let err = document.createElement("span");
    err.classList.add("err");
    err.classList.add("w-20");
    err.classList.add("t");
    err.textContent = text;
    document.querySelector(".error-log").appendChild(err);
    setTimeout(() => {
      err.style.opacity = "1";
    }, 200);
    setTimeout(() => {
      err.style.opacity = "0";
    }, 7000);
    setTimeout(() => {
      err.remove();
    }, 7200);
}

document.querySelector(".explore-holder").addEventListener("click", function (event) {
    const targetButton = event.target.closest("button");
    if (targetButton) {
      createError("You dont have enough credits on your account");
    }
});

document.querySelector(".header").addEventListener("click", function(event) {
    const targetButton0 = event.target.closest(".opt");
    const targetButton1 = event.target.closest(".prof");
    if (targetButton0) {
        createError("Options are currently in development");
    } else if (targetButton1) {
        createError("This function is not ready yet (Profile)");
    }
})
document.querySelector(".pre-div").addEventListener("click", function(event) {
    const targetButton = event.target.closest("button");
    if (targetButton) {
        createError("This function is not ready yet (Button)");
    }
})
document.querySelector(".just-l").addEventListener("click", function(event) {
    const targetButton = event.target.closest("button");
    if (targetButton) {
        createError("This function is not ready yet (Button)");
    }
})