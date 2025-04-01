// ELEMENTOS
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('voltar');
const btnNext = document.getElementById('avancar');

let currentSlide = 0;

function hideSlide() {
    slides.forEach(item => item.classList.remove('on'));
}

function showSlide() {
    slides[currentSlide].classList.add('on');
}

function nextSlide() {
    hideSlide();
    if (currentSlide === slides.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlide();
}

function prevSlide() {
    hideSlide();
    if (currentSlide === 0) {
        currentSlide = slides.length -1
    } else {
        currentSlide--
    }
    showSlide();
}

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)