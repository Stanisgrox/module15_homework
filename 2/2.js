//Получение элементов
button = document.getElementById("sizes");
//Получение измерений
x = window.screen.width;
y = window.screen.height;

button.addEventListener('click', () => {
    //Оформление сообщения
    message = 'Размеры экрана: Х = '+ x + ' Y = ' + y;
    alert(message);
})