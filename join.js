let joinMenu = document.querySelector('#join-menu-hide');
console.log(joinMenu);
let joinMenuBtn = document.querySelector('#join-menu-btn')
console.log(joinMenuBtn)

joinMenuBtn.addEventListener('click',() => {
    joinMenu.classList.toggle('hidden')
});