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
