if (!localStorage.getItem("cookies-aceptadas")) {
    document.getElementById("cookie-banner").classList.remove("hidden");
}

document.getElementById("accept-cookies").addEventListener("click", function() {
    localStorage.setItem("cookies-aceptadas", "true");
    document.getElementById("cookie-banner").classList.add("hidden");
});


let menuBtn = document.querySelector('#menu-btn');
let naveg = document.querySelector('.naveg');
let searchForm = document.querySelector('.search-form');

menuBtn.onclick = () => {
    naveg.classList.toggle('active');        // abrir/cerrar menú
    searchForm.classList.remove('active');   // cerrar buscador
    menuBtn.classList.toggle('fa-times');    // cambiar ícono ☰ ↔ ✖
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');   // abrir/cerrar buscador
    naveg.classList.remove('active');        // cerrar menú
    menuBtn.classList.remove('fa-times');    // reset ícono
};

window.onscroll = () => {
    naveg.classList.remove('active');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
};
