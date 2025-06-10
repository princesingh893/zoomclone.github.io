let dropDown = document.querySelector("#dropdown");
let yourActivity = document.querySelector("#your-activity");
dropDown.addEventListener("click", () => {
  yourActivity.classList.toggle("hide");
});

let clipDropDown = document.querySelector("#clip-dropdown");
let clipActivity = document.querySelector("#clip-activity");

clipDropDown.addEventListener("click", () => {
  clipActivity.classList.toggle("hide");
});

let whiteActivity = document.querySelector("#white-activity");
let whiteDropDown = document.querySelector("#white-dropdown");

whiteDropDown.addEventListener("click", () => {
  whiteActivity.classList.toggle("hide");
});

let linkBackGround = document.querySelector("#link-background");

linkBackGround.addEventListener("click", () => {
  linkBackGround.classList.add("bg");
});

const topDownHide = document.querySelector('.before-1024');
const mainLeft = document.querySelector('.main-left');
const main = document.querySelector('.main');

topDownHide.addEventListener('click', () => {

  if (mainLeft.style.display === "block") {
    mainLeft.style.display = "none";
  } else {
    mainLeft.style.display = "block";
  }
  main.style.flexDirection = "column";
  mainLeft.style.width = "100%";
});
const menuCross = document.querySelector('.top3-cross');
const menuButton = document.querySelector('.top3-hide');  
const menuMainContainer = document.querySelector('.menu-main-container');

function toggleMenu() {
  const isHidden = menuMainContainer.style.display === "none";
  
  menuMainContainer.style.display = isHidden ? "block" : "none";
  menuCross.style.display = isHidden ? "block" : "none";
  menuButton.style.display = isHidden ? "none" : "block";
}


menuButton.addEventListener('click', toggleMenu);
menuCross.addEventListener('click', toggleMenu);