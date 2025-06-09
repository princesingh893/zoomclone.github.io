let joinMenu = document.querySelector('#join-menu-hide');
let joinMenuBtn = document.querySelector('#join-menu-btn')
let menuCross = document.querySelector('.join-cross-menu');

function toogleHideMenu() {
    if (joinMenuBtn.style.display === 'block') {
        joinMenuBtn.style.display = 'none';
        menuCross.style.display = 'block';
        joinMenu.style.display = 'block';
    } else {
        joinMenuBtn.style.display = 'block';
        menuCross.style.display = 'none';
        joinMenu.style.display = 'none';
    }
}
joinMenuBtn.addEventListener('click',(toogleHideMenu));
menuCross.addEventListener('click',(toogleHideMenu));