// Об'єкт slider для роботи зі слайдером
let slider = {
    // Масив зображень, які будуть відображатися у слайдері
    slides: ['1.jpg', '2.jpg', '3.jpg'], 
    // Поточний індекс зображення
    i: 0, 
    // Метод для встановлення зображення на слайдер
    set: function(image) {
        // Отримуємо елемент з id "scr" та задаємо його фону потрібне зображення
        document.getElementById('scr').style.backgroundImage = "url('" + image + "')";
    },
    // Ініціалізація слайдера: встановлення першого зображення
    init: function() {
        this.set(this.slides[this.i]); // Встановлюємо перше зображення з масиву
    },
    // Метод для перемикання слайдера вліво
    left: function() {
        this.i--; // Зменшуємо індекс
        // Якщо індекс менший за 0, переходимо до останнього зображення
        if (this.i < 0) this.i = this.slides.length - 1; 
        this.set(this.slides[this.i]); // Встановлюємо нове зображення
    },
    // Метод для перемикання слайдера вправо
    right: function() {
        this.i++; // Збільшуємо індекс
        // Якщо індекс більший або дорівнює довжині масиву, повертаємося до першого зображення
        if (this.i == this.slides.length) this.i = 0; 
        this.set(this.slides[this.i]); // Встановлюємо нове зображення
    }
};

// Запуск слайдера після завантаження сторінки
window.onload = function() {
    // Викликаємо метод ініціалізації слайдера
    slider.init();

    // Автоматичне перемикання слайдів кожні 5 секунд
    setInterval(() => slider.right(), 5000);

    // Додаємо обробник події на кнопку "Вліво"
    let btn1 = document.querySelector('.left'); 
    btn1.addEventListener('click', () => slider.left());

    // Додаємо обробник події на кнопку "Вправо"
    let btn2 = document.querySelector('.right'); 
    btn2.addEventListener('click', () => slider.right());
};
