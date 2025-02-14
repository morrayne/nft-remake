const discoverArr = [
  "Discover and",
  "create NFTs",
  "Discover, Create and Sell NFTs On Our NFT Marketpl… With Over Thousands Of NFTs And Get a $20 bonus.",
  "about NFTs",
  "to traidings",
  "Art works",
  "Creators",
  "Collections",
];
const exploreArr = [
  "Explore marketplace",
  "refresh filters",
  "price manage",
  "image color",
  "hide similar",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
  "current bid",
  "place bid",
];
const justArr = [
  "Just unleash",
  "your inner collector",
  "Best seller all around the world",
  "$2M+ transections every day",
  "Secure transactions",
  "Exclusive collections from sellers",
  "Easy buying and selling",
  "Join our community",
  "explore more",
  "Best sellers",
];
const preArr = [
  "Create and sell NFTs",
  "World’s largest NFT marketplace",
  "Leave your opinion about ntf-remake",
];
const tableArr = [];
const commentsArr = [];
const footerArr = [];
const optionsArr = [
  "Language",
  "English",
  "Ru ian",
  "Theme",
  "Light",
  "Dark",
  "Another",
  "Notifications alert",
  "On",
  "Off",
  "@redmorrayne",
  "uid: 0",
  "",
];

// смена языка

function changeLang(inputLang) {}
let mainC = document.querySelector(".c");
let mainArr = [];
let childrenCount = mainC.children.length;
for (let i = 0; i < childrenCount; i++) {
  let arr = [];
  mainC.children[i].querySelectorAll(".t").forEach(function (el) {
    arr.push(removeAdjacentSpaces(el.textContent));
  });
  mainArr.push(arr);
}
console.log(mainArr);
