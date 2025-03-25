// ELEMENTOS
const day = document.querySelectorAll('.section__scheduleDay');
const eventos = document.querySelectorAll('.section__events');

// EVENTOS
for (let i = 0; i < day.length; i++) {
    day[i].addEventListener('click', () => AbrirFecharDia(i))
}

// FUNÇÕES
function AbrirFecharDia(index) {
    const classe = 'ativado'
    eventos[index].classList.toggle(classe)
}