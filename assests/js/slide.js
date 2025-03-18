// ELEMENTOS
const buttonVoltar = document.querySelector('#voltar')
const buttonAvancar = document.querySelector('#avancar')
const listaSlide = document.querySelector('ul.sectionSlide__listaSlides')
const itensSlide = listaSlide.querySelectorAll('li.sectionSlide__itemSlide')

// CONSTANTS
const larguraSlide = 1312
const quantidadeItens = itensSlide.length

// VARIÁVEIS
let distancia = 0

// EVENTOS
buttonVoltar.addEventListener('click', botaoVoltar)
buttonAvancar.addEventListener('click', botaoAvancar)
window.addEventListener('resize', redimensionar)

// CALLBACKS
function botaoVoltar() {
    if (distancia === 0) return;
    
    distancia += larguraSlide
    
    moverSlide(distancia)
}

function botaoAvancar() {
    
    const larguraTotalSlide = quantidadeItens * larguraSlide
    const larguraPercorrida = window.innerWidth + (distancia * -1)
    
    if (larguraPercorrida >= larguraTotalSlide) return
    
    distancia -= larguraSlide
    
    moverSlide(distancia)
}


function redimensionar() {
    distancia = 0
    moverSlide(distancia)
}

// AUX FUNCTIONS
function moverSlide(distancia) {
    listaSlide.style.transform = `translateX(${distancia}px)`
}