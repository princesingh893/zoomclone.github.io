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

const topDownHide = document.querySelector('.top-down-hide');
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

let menu = document.querySelector('.top3-hide');
let menuMainContainer = document.querySelector('.menu-main-container')
menu.addEventListener('click',() => {
  if(menuMainContainer.style.display === "none"){
    menuMainContainer.style.display = "block";
  }else{
    menuMainContainer.style.display = "none";
  }
});