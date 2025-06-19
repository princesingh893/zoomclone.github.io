console.log("js is running !")
let dropDown = document.querySelector("#dropdown");
let yourActivity = document.querySelector("#your-activity");
dropDown.addEventListener("click", () => {
  yourActivity.classList.toggle("hidden");
});

let clipDropDown = document.querySelector("#clip-dropdown");
let clipActivity = document.querySelector("#clip-activity");

clipDropDown.addEventListener("click", () => {
  clipActivity.classList.toggle("hidden");
});

let whiteActivity = document.querySelector("#white-activity");
let whiteDropDown = document.querySelector("#white-dropdown");

whiteDropDown.addEventListener("click", () => {
  whiteActivity.classList.toggle("hidden");
});


const leftSideUl = document.querySelectorAll('.left-side-ul li');
const savedIndex = localStorage.getItem('selectedIndexItems');

// Reset all backgrounds first
leftSideUl.forEach(item => {
  item.style.backgroundColor = '';
});

// Apply saved selection if it exists, otherwise default to index 0
if (savedIndex !== null && savedIndex >= 0 && savedIndex < leftSideUl.length) {
  leftSideUl[savedIndex].style.backgroundColor = '#D7E6FC';
} else {
  leftSideUl[0].style.backgroundColor = '#D7E6FC'; // Default to index 0
}

leftSideUl.forEach((element, index) => {
  element.addEventListener('click', () => {
    // Reset all backgrounds and pointer events
    leftSideUl.forEach(item => {
      item.style.backgroundColor = '';
      item.style.pointerEvents = 'auto';
    });
    
    // Apply new selection
    element.style.backgroundColor = '#D7E6FC';
    element.style.pointerEvents = 'none';
    localStorage.setItem('selectedIndexItems', index);
  });
});


let menu = document.querySelector('#menu');
let crossMenu = document.querySelector('#cross-menu');
let topMenuHide = document.querySelector('#top-menu-hide');

function toggleMenu() {
  const isHidden = topMenuHide.style.display === "none";

  topMenuHide.style.display = isHidden ? "block" : "none";
  crossMenu.style.display = isHidden ? "block" : "none";
  menu.style.display = isHidden ? "none" : "block";
}

menu.addEventListener('click', toggleMenu);
crossMenu.addEventListener('click', toggleMenu);

let homePhone = document.querySelector('#home-phone');
let homeComes = document.querySelector('#home-comes');

homePhone.addEventListener('click', () => {
  console.log('cliked again')
  homeComes.classList.toggle('hidden');
});

