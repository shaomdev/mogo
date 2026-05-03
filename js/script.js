// Форма обратной связи
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


// поле поиска Search... добавил немного интерактивности
const searchBtn = document.getElementById('searchBtn');
const searchWrap = document.getElementById('searchWrap');
const searchInput = document.querySelector('.search__input');

searchBtn.addEventListener('click', (e) => {
    // Если поле пустое и закрыто — открываем
    if (!searchWrap.classList.contains('search--active')) {
        e.preventDefault();
        searchWrap.classList.add('search--active');
        searchInput.focus();
    } 
    // Если поле открыто и там что-то написано — кнопка сработает как "Найти"
    else if (searchInput.value === '') {
        searchWrap.classList.remove('search--active');
    }
});

// Закрываем, если кликнули в любое другое место сайта
document.addEventListener('click', (e) => {
    if (!searchWrap.contains(e.target)) {
        searchWrap.classList.remove('search--active');
    }
});
