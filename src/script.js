let estadodoMenu = 0
const lista = document.querySelector(".mobile-menu-list")

function alternarMenu() {
    estadodoMenu++

    if (estadodoMenu%2 == 1){
        lista.classList.add("open")
        document.querySelector('.menu-icon').src = "/src/img/close_white_36dp.svg";
    }
    else {
        lista.classList.remove("open")
        document.querySelector('.menu-icon').src = "/src/img/menu_white_36dp.svg";
    }
}