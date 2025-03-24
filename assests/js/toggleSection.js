// ELEMENTOS
const btns = document.querySelectorAll('[data-target]') 

const listas = document.querySelectorAll('.section__companies') 
const classe = 'ativo';

// EVENTOS
btns.forEach(btn => {
    
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove(classe))

        btn.classList.add(classe)

        const target = document.querySelector(btn.dataset.target) // Obter valor do atributo
        
        listas.forEach(lista => { 
            lista.classList.remove(classe)
        })
        
        target.classList.add(classe)
        
    })
})
