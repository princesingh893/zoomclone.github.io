let group = document.querySelector('.group');
console.log(group);
let lang = document.querySelector('.lang');
console.log(lang);



group.addEventListener('click',() =>{
    lang.classList.toggle('hidden')
});