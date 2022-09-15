//Получение элементов
button = document.getElementById("changeling");
ico = document.getElementById("ico");
//Свитч переменная, false = не закрашена
form = false;


button.addEventListener('click', () => {
    //Если картинка закрашена, то поменять на не закрашенную
    if (form){
        ico.src = "icons/icon_01.svg";
        form = false;
        return
    }
    //И наоборот
    ico.src = "icons/icon_02.svg";
    form = true;
})