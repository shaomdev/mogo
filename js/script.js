const modal = document.getElementById('contactModal');
const openBtn = document.querySelector('.nav__link--contact'); // Убедись, что у ссылки в меню есть такой класс
const closeBtn = document.getElementById('closeModal');

// Открыть модалку
openBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Чтобы страница не прыгала вверх
    modal.classList.add('modal--open');
});

// Закрыть модалку
closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--open');
});

// Закрыть при клике на темный фон
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal--open');
    }
});