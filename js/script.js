/*const toggleBtn = document.getElementById('toggleBtn');
const bancoLista = document.getElementById('bancoLista');

let isListVisible = false;

toggleBtn.addEventListener('click', () => {
    isListVisible = !isListVisible;

    if (isListVisible) {
        bancoLista.style.display = 'block';
        toggleBtn.textContent = 'OCULTAR DATOS';
    } else {
        bancoLista.style.display = 'none';
        toggleBtn.textContent = 'DATOS BANCARIOS';
    }
});*/

const toggleBtn = document.getElementById('toggleBtn');
const bancoLista = document.querySelector('.bancoLista');

toggleBtn.addEventListener('click', () => {
    bancoLista.classList.toggle('visible');
    if (bancoLista.classList.contains('visible')) {
        toggleBtn.textContent = 'OCULTAR DATOS';
    } else {
        toggleBtn.textContent = 'DATOS BANCARIOS';
    }
});