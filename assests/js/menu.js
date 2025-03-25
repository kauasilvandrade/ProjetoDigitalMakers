// ELEMENTOS
const hamburguer = document.querySelector('.hamburguer');
const cabecalho = document.querySelector('.header');

// EVENTOS
hamburguer.addEventListener('click', function() {
    cabecalho.classList.toggle('ativo') ;
})