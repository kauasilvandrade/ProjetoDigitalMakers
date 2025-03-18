// ELEMENTOS
const botoesPerguntas = document.querySelectorAll('.section__question');
const respostas = document.querySelectorAll('.section__question p');

// EVENTOS
for (let i = 0; i < botoesPerguntas.length; i++) {
    botoesPerguntas[i].addEventListener('click', () => AbrirFecharPergunta(i))
}

// FUNÇÕES
function AbrirFecharPergunta(index) {
    const classe = 'ativado'
    respostas[index].classList.toggle(classe);
    botoesPerguntas[index].classList.toggle(classe)
}
