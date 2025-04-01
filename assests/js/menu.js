// ELEMENTOS
const hamburguer = document.querySelector('.btnMenu');
const cabecalho = document.querySelector('.header');

// EVENTOS
hamburguer.addEventListener('click', function() {
    cabecalho.classList.toggle('ativo') ;
    window.addEventListener('resize', () => cabecalho.classList.remove('ativo'))
    const links = document.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener('click', () => cabecalho.classList.remove('ativo'))
    })
    console.log(links)
    
})