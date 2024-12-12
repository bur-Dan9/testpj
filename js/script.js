(() => {
const button = document.querySelector('.form-label-sendbtn');

// При наведении на кнопку начинаем анимацию
button.addEventListener('mouseenter', () => {
  button.classList.add('animate');  // Добавляем класс для анимации
});
})();