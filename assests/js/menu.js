const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.header__nav');

hamburguer.addEventListener('click', function() {
    nav.classList.toggle('ativo') ;
    hamburguer.classList.toggle('ativo');
})