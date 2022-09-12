button = document.getElementById("changeling");
ico = document.getElementById("ico");

form = false;


button.addEventListener('click', () => {
    if (form){
        ico.src = "icons/icon_01.svg";
        form = false;
        return
    }
    ico.src = "icons/icon_02.svg";
    form = true;
})