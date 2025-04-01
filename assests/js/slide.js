// ELEMENTOS
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('btnVoltarSlide');
const btnNext = document.getElementById('btnAvancarSlide');

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