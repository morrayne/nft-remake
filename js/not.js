let waitArr = [];
const maxNotifications = 5;

function createNot(text) {
  let parent = document.getElementById("notifications");
  let not = document.createElement("span");
  not.textContent = text;
  not.classList.add("w", "t-18", "t", "not");

  if (parent.children[0].children.length < maxNotifications) {
    parent.children[0].append(not);
    decay(not);
  } else {
    waitArr.push(text);
    console.log(waitArr);
    manageNotifications(parent);
  }
}

function manageNotifications(parent) {
  const interval = setInterval(() => {
    if (parent.children[0].children.length >= maxNotifications) {
      const oldestNot = parent.children[0].children[0];
      oldestNot.style.opacity = "0";
      setTimeout(() => {
        oldestNot.remove();
        if (waitArr.length > 0) {
          createNot(waitArr.shift());
        }
      }, 200);
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function decay(not) {
  setTimeout(() => {
    not.style.opacity = "1";
  }, 200);
  setTimeout(() => {
    not.style.opacity = "0";
  }, 5000);
  setTimeout(() => {
    not.remove();
  }, 5200);
}
