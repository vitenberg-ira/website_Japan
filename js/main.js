const header = document.querySelector('.header'); // Здесь класс вашей шапки
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
    header.classList.addClass('.header__active'); // Добавить класс, который будет менять стили
    }
});